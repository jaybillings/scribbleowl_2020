import React, {Component} from 'react';
import {renderCopy} from "../../js/utilities";

import ScrollTop from "../common/ScrollTop";

import pageContent from '../../content/about.json';

export default class About extends Component {
  constructor(props) {
    super(props);

    this.title = pageContent.title;
    this.copy = pageContent.copy;
    this.skillsSection = pageContent.skillsSection;

    this.renderSkillsSection = this.renderSkillsSection.bind(this);
  }

  renderSkillsSection() {
    const html = [];

    this.skillsSection.forEach((section, index) => {
      html.push(<h3 key={`header_${index}`}>{section.header}</h3>);
      html.push(renderCopy(section.copy, 'aboutskills'));
    });

    return html.map(elem => elem);
  }

  render() {
    return ([
      <div id={'about'} key={'about'} className={'section'}>
        <h2>{this.title}</h2>
        {this.copy.map((line, index) => <p key={`aboutmain_${index}`}>{line}</p>)}
        {this.renderSkillsSection()}
        <ScrollTop/>
      </div>
    ])
  }
}