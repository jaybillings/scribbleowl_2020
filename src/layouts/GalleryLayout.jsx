import React, {Component} from 'react';
import app from "../services/socketio";

import GalleryHeader from "../components/GalleryHeader";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

import 'normalize.css/normalize.css';
import '../styles/index.css';
import '../styles/section.css';
import {Link} from "react-router-dom";

export default class GalleryLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {projList: [], projects: [], images: []};

    this.projID = this.props.match.params.alias;

    this.miniCRMService = app.service('mini-crm');
  }

  componentDidMount() {
    this.miniCRMService.get('gallery').then(result => {
      console.info('config res', result);
      this.setState({projList: result.data.projectOrder, projects: result.data.projects});
    }).catch(err => console.error(err));

    this.miniCRMService.get(`projects/config_${this.projID}`).then(result => {
      console.info('result', result);
      this.setState({images: result.data});
    }).catch(err => console.error(err));
  }

  render() {
    return [
      <GalleryHeader key={'header'} projID={this.projID} projList={this.state.projList} projects={this.state.projects} />,
      <Gallery key={'gallery'} images={this.state.images} />,
      <Footer key='footer'/>
    ]
  }
}