import React, {Component} from 'react';
import app from "../services/socketio";

import GalleryHeader from "../components/GalleryHeader";
import GalleryNav from "../components/GalleryNav";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

import 'normalize.css/normalize.css';
import '../styles/index.css';
import '../styles/section.css';

export default class GalleryLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {projList: [], projects: {}, images: []};

    this.miniCRMService = app.service('mini-crm');

    this.fetchImages = this.fetchImages.bind(this);
  }

  componentDidMount() {
    this.miniCRMService.get('gallery').then(result => {
      this.setState({projList: result.data.projectOrder, projects: result.data.projects});
    }).catch(err => console.error(err));

    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.alias !== this.props.match.params.alias) {
      this.fetchImages();
    }
  }

  fetchImages() {
    const projID = this.props.match.params.alias;

    this.miniCRMService.get(`projects/config_${projID}`).then(result => {
      this.setState({images: result.data});
    }).catch(err => console.error(err));
  }

  render() {
    const projID = this.props.match.params.alias || '';
    const imgIndex = parseInt(this.props.match.params.index, 10) || 0;

    return [
      <GalleryHeader key={'header'} projID={projID} projects={this.state.projects} />,
      <GalleryNav key={'nav'} projID={projID} projList={this.state.projList} projects={this.state.projects} imgIndex={imgIndex} images={this.state.images} />,
      <Gallery key={'gallery'} images={this.state.images} imgIndex={imgIndex} />,
      <Footer key='footer'/>
    ]
  }
}