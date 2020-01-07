import React, {Component} from 'react';
import ScrollTop from "./ScrollTop";

import "../styles/section-skills.css";

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', copy: [], skills: []};
  }

  componentDidMount() {
    this.props.fetchConfig('skills').then(result => {
      this.setState({title: result.data.title, copy: result.data.copy, skills: result.data.skills});
    }).catch(err => console.error('err'));
  }

  render() {
    if (!this.state.title) return <p className={'loading'}>Loading...</p>;

    return (
      <div id={'skills'} className={'section'}>
        <div>
          <h2>{this.state.title}</h2>
          {this.props.renderCopy(this.state.copy)}
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
    )
  }
}