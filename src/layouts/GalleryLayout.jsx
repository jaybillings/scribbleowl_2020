import React, {Component} from 'react';
import app from "../services/socketio";

import GalleryHeader from "../components/GalleryHeader";
import Footer from "../components/Footer";

import 'normalize.css/normalize.css';
import '../styles/index.css';
import '../styles/section.css';

export default class GalleryLayout extends Component {
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
      <GalleryHeader key={'header'} />,
      <h2>More soon</h2>,
      <Footer key='footer' />
    ]
  }
}