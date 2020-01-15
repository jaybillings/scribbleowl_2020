import React, {Component} from 'react';
import app from '../services/socketio';

import Header from '../components/sections/Header';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';
import Skills from "../components/sections/Skills";
import Footer from "../components/sections/Footer";

import 'normalize.css/normalize.css';
import '../styles/index.css';
import '../styles/section.css';

export default class SinglePageLayout extends Component {
  constructor(props) {
    super(props);

    this.miniCRMService = app.service('mini-crm');

    this.fetchConfig = this.fetchConfig.bind(this);
  }

  async fetchConfig(filename) {
    return this.miniCRMService.get(filename);
  }

  render() {
    return [
      <Header key={'header'} forHire={this.props.forHire} />,
      <About key={'aboutSection'} />,
      <Skills key={'skillsSection'} fetchConfig={this.fetchConfig} />,
      <Portfolio key={'portfolioSection'} fetchConfig={this.fetchConfig} />,
      <Contact key={'contactSection'} forHire={this.props.forHire} fetchConfig={this.fetchConfig} />,
      <Footer key={'footer'} />
    ];
  }
}