import React, {Component} from 'react';
import {Redirect} from "react-router";

import GalleryHeader from "../components/gallery/GalleryHeader";
import GalleryNav from "../components/gallery/GalleryNav";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/common/Footer";

import 'normalize.css/normalize.css';
import '../styles/index.css';

export default class GalleryLayout extends Component {
  constructor(props) {
    super(props);

    this.projID = this.props.match.params.alias || '';
    this.imgIndex = parseInt(this.props.match.params.index, 10) || 0;
  }

  render() {
    let galleryConfig, projImages, currentProj;

    try {
      galleryConfig = require('../content/gallery.json');
      projImages = require(`../content/projects/config_${this.projID}`);
    } catch(err) {
      return <Redirect to={'/oops'} />;
    }

    try {
      currentProj = galleryConfig.projects[this.projID];
    } catch(err) {
      return <Redirect to={'/oops'} />;
    }

    return [
      <GalleryHeader key={'header'} projID={this.projID} currentProj={currentProj} />,
      <GalleryNav key={'nav'} projID={this.projID} projList={galleryConfig.projectOrder} projects={galleryConfig.projects} imgIndex={this.imgIndex} imgCount={projImages.length} />,
      <Gallery key={'gallery'} imgIndex={this.imgIndex} images={projImages} />,
      <Footer key='footer'/>
    ]
  }
}