import React, {Component} from 'react';
import {Redirect} from "react-router";

import GalleryHeader from "../components/gallery/GalleryHeader";
import GalleryNav from "../components/gallery/GalleryNav";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/common/Footer";

import galleryConfig from '../content/gallery.json';

export default class GalleryLayout extends Component {
  render() {
    const projID = this.props.match.params.alias || galleryConfig.projectOrder[0];
    const imgIndex = parseInt(this.props.match.params.index, 10) || 0;
    let currentProj = {}, projImages = [];

    currentProj = galleryConfig.projects[projID];
    if (!currentProj) {
      console.error('currentProj does not exist');
      return <Redirect to={'/404'}/>;
    }

    try {
      projImages = require(`../content/projects/config_${projID}`);
    } catch (err) {
      console.error(err);
    }

    return [
      <GalleryHeader key={'header'} title={currentProj.title} year={currentProj.year} />,
      <GalleryNav key={'gallery-nav'} projID={projID} projects={galleryConfig.projects}
                  projectOrder={galleryConfig.projectOrder} imgIndex={imgIndex} imgCount={projImages.length}/>,
      <Gallery key={'gallery'} imgIndex={imgIndex} images={projImages} projID={projID} project={currentProj}/>,
      <Footer key='footer'/>
    ]
  }
}