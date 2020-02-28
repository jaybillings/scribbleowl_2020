import React, { Component } from 'react';
import { Redirect } from "react-router";

import GalleryHeader from "../components/gallery/GalleryHeader";
import GalleryNav from "../components/gallery/GalleryNav";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/common/Footer";

import galleryConfig from '../content/gallery.json';
import GalleryImageNav from "../components/gallery/GalleryImageNav";

export default class GalleryLayout extends Component {
  render() {
    const projID = this.props.match.params.alias || galleryConfig.projectOrder[0];
    let currentProj = {};

    currentProj = galleryConfig.projects[projID];
    if (!currentProj || !galleryConfig.projectOrder.includes(projID)) {
      console.error('currentProj does not exist or is not included in projectOrder');
      return <Redirect to={'/404'} />;
    }

    let projImages = {};
    try {
      projImages = require(`../content/projects/config_${projID}`);
    } catch (err) {
      return <Redirect to={'/oops'} />;
    }

    const imgIndex = parseInt(this.props.match.params.index, 10) || 0;

    return [
      <GalleryHeader key={'header'} title={currentProj.title} year={currentProj.year} />,
      <nav className={'gallery-nav'} key={'gallery-nav'}>
        <GalleryNav projID={projID} projects={galleryConfig.projects} projectOrder={galleryConfig.projectOrder} />
        {projImages.length > 0
          ? <GalleryImageNav imgIndex={imgIndex} imgCount={projImages.length} projID={projID} />
          : ''}
      </nav>,
      <Gallery key={'gallery'} imgIndex={imgIndex} images={projImages} projID={projID} project={currentProj} />,
      <Footer key='footer' />
    ]
  }
}