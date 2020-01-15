import React, {Component} from 'react';
import {renderCopy} from "../js/utilities";

import ScrollTop from "./ScrollTop";
import Loading from "./Loading";

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
    if (!this.state.title) return <Loading/>;

    return (
      <div id={'skills'} className={'section'}>
        <div>
          <h2>{this.state.title}</h2>
          {renderCopy(this.state.copy)}
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