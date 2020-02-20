import React, { Component } from 'react';

import ScrollTop from "../common/ScrollTop";
import ReactMarkdown from "react-markdown";

import "../../styles/scss/about.scss";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.renderSkillsSection = this.renderSkillsSection.bind(this);
  }

  renderSkillsSection() {
    const html = [];

    this.props.skillsSection.forEach((section, index) => {
      html.push(<h3 key={`header_${index}`}>{section.header}</h3>);
      html.push(<ReactMarkdown key={`copy_${index}`} source={section.copy} />);
    });

    return html.map(elem => elem);
  }

  render() {
    return (
      <div id={'about'} key={'about'} className={'about section'}>
        <h2>{this.props.title}</h2>
        <ReactMarkdown source={this.props.copy} />
        {this.renderSkillsSection()}
        <ScrollTop />
      </div>
    )
  }
}