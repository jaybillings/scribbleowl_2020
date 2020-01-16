import React, {Component} from 'react';
import {renderCopy} from "../../js/utilities";

import ScrollTop from "../ScrollTop";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', copy: [], skillsSection: []};

    this.renderSkillsSection = this.renderSkillsSection.bind(this);
  }

  componentDidMount() {
    this.props.fetchConfig('about').then(result => {
      this.setState({title: result.data.title, copy: result.data.copy, skillsSection: result.data.skillsSection});
    }).catch(err => console.error(err));
  }

  renderSkillsSection() {
    const skillsSection = [];

    console.log(this.state.skillsSection);

    this.state.skillsSection.forEach(section => {
      skillsSection.push(<h3>{section.header}</h3>);
      skillsSection.push(renderCopy(section.copy));
    });

    return skillsSection.map(elem => elem);
  }

  render() {
    return ([
      <div id={'about'} className={'section'}>
        <h2>{this.state.title}</h2>
        {this.state.copy.map((line, iter) => <p key={iter}>{line}</p>)}
        {this.renderSkillsSection()}
        <ScrollTop/>
      </div>
    ])
  }
}