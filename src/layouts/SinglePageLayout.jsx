import React, {Component} from 'react';
import app from '../services/socketio';

import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default class SinglePageLayout extends Component {
  constructor(props) {
    super(props);

    this.miniCRMService = app.service('mini-crm');

    this.fetchConfig = this.fetchConfig.bind(this);
    this.renderCopy = this.renderCopy.bind(this);
  }

  async fetchConfig(fileName) {
    return this.miniCRMService.get(fileName);
  }

  renderCopy(copy) {
    if (!copy) return;
    if (!copy.length) return <p>{copy}</p>;
    return copy.map((line, iter) => <p key={iter}>{line}</p>);
  }


  render() {
    return [
      <Header key={'header'} forHire={this.props.forHire} fetchConfig={this.fetchConfig} />,
      <About key={'aboutSection'} fetchConfig={this.fetchConfig} renderCopy={this.renderCopy} />,
      <Skills key={'skillsSection'} fetchConfig={this.fetchConfig} renderCopy={this.renderCopy} />,
      <Portfolio key={'portfolioSection'} fetchConfig={this.fetchConfig} renderCopy={this.renderCopy} />,
      <Contact key={'contactSection'} forHire={this.props.forHire} fetchConfig={this.fetchConfig} renderCopy={this.renderCopy} />,
      <Footer key={'footer'} />
    ];
  }
}