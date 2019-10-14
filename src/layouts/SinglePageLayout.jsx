import React, {Component} from 'react';
import app from '../services/socketio';

import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

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
      <Header forHire={this.props.forHire} fetchConfig={this.fetchConfig} />,
      <About fetchConfig={this.fetchConfig} />,
      <Portfolio fetchConfig={this.fetchConfig} />,
      <Contact forHire={this.props.forHire} fetchConfig={this.fetchConfig} />,
    ];
  }
}