import React, {Component} from 'react';
import {Redirect} from "react-router";

import GalleryHeader from "../components/gallery/GalleryHeader";
import GalleryNav from "../components/gallery/GalleryNav";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/common/Footer";

import 'normalize.css/normalize.css';
import '../styles/index.css';

export default class GalleryLayout extends Component {
  render() {
    const projID = this.props.match.params.alias || '';
    const imgIndex = parseInt(this.props.match.params.index, 10) || 0;
    let galleryConfig, projImages;

    try {
      galleryConfig = require('../content/gallery.json');
      projImages = require(`../content/projects/config_${projID}`);
    } catch(err) {
      console.error(err);
      return <Redirect to={'/oops'} />;
    }

    const currentProj = galleryConfig.projects[projID];

    if (!currentProj) {
      console.error('currentProj does not exist');
      return <Redirect to={'/404'} />;
    }

    return [
      <GalleryHeader key={'header'} title={currentProj.title} />,
      <GalleryNav key={'nav'} projID={projID} projList={galleryConfig.projectOrder} projects={galleryConfig.projects} imgIndex={imgIndex} imgCount={projImages.length} />,
      <Gallery key={'gallery'} imgIndex={imgIndex} images={projImages} />,
      <Footer key='footer'/>
    ]
  }
}