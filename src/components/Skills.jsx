import React, {Component} from 'react';

import "../styles/section-skills.css";
import ScrollTop from "./ScrollTop";

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', copy: [], skills: []};
  }

  componentDidMount() {
    this.props.fetchConfig('skills').then(result => {
      this.setState({title: result.data.title, copy: result.data.copy, skills: result.data.skills});
    }).catch(err => {
      console.error('err');
    });
  }

  render() {
    return ([
      <div id={'skills'} className={'section'}>
        <div>
          <h2>{this.state.title}</h2>
          <p>{this.state.copy}</p>
          {
            this.state.skills.map((subsection, iter) =>
              <div key={subsection.title} className={'skillItem'}>
                <h3>{subsection.title}</h3>
                <p>{subsection.desc}</p>
                <ul>{subsection.items.map((item, iter) => <li key={iter}>{item}</li>)}</ul>
              </div>
            )
          }
        </div>
        <ScrollTop/>
      </div>
    ])
  }
}