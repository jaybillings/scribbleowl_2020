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

    this.state.skillsSection.forEach((section, index) => {
      skillsSection.push(<h3 key={`header_${index}`}>{section.header}</h3>);
      skillsSection.push(renderCopy(section.copy, 'aboutskills'));
    });

    return skillsSection.map(elem => elem);
  }

  render() {
    return ([
      <div id={'about'} key={'about'} className={'section'}>
        <h2>{this.state.title}</h2>
        {this.state.copy.map((line, index) => <p key={`aboutmain_${index}`}>{line}</p>)}
        {this.renderSkillsSection()}
        <ScrollTop/>
      </div>
    ])
  }
}