import React, {Component} from 'react';
import app from '../services/socketio';

import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Skills from "../components/Skills";

export default class SinglePageLayout extends Component {
  constructor(props) {
    super(props);

    this.miniCRMService = app.service('mini-crm');

    this.fetchConfig = this.fetchConfig.bind(this);
  }

  async fetchConfig(fileName) {
    return this.miniCRMService.get(fileName);
  }

  render() {
    return [
      <Header key={'header'} forHire={this.props.forHire} fetchConfig={this.fetchConfig} />,
      <About key={'aboutSection'} fetchConfig={this.fetchConfig} />,
      <Skills key={'skillsSection'} fetchConfig={this.fetchConfig} />,
      <Portfolio key={'portfolioSection'} fetchConfig={this.fetchConfig} />,
      <Contact key={'contactSection'} forHire={this.props.forHire} fetchConfig={this.fetchConfig} />,
    ];
  }
}