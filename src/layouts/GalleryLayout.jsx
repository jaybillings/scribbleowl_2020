import React, {Component} from 'react';
import {Redirect} from "react-router";

import GalleryHeader from "../components/gallery/GalleryHeader";
import GalleryNav from "../components/gallery/GalleryNav";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/common/Footer";

import galleryConfig from '../content/gallery.json';

export default class GalleryLayout extends Component {
  render() {
    const projID = this.props.match.params.alias;
    const imgIndex = parseInt(this.props.match.params.index, 10) || 0;
    let currentProj, projImages;

    if (!projID) return <Redirect to={`/gallery/${galleryConfig.projectOrder[0]}`} />;

    currentProj = galleryConfig.projects[projID];
    if (!currentProj) {
      console.error('currentProj does not exist');
      return <Redirect to={'/404'} />;
    }

    try {
      projImages = require(`../content/projects/config_${projID}`);
    } catch(err) {
      console.error(err);
      return <Redirect to={'/oops'} />;
    }

    return [
      <GalleryHeader key={'header'} title={currentProj.title} year={currentProj.year} />,
      <GalleryNav key={'nav'} projID={projID} projList={galleryConfig.projectOrder} imgIndex={imgIndex} imgCount={projImages.length} />,
      <Gallery key={'gallery'} imgIndex={imgIndex} images={projImages} project={currentProj} />,
      <Footer key='footer'/>
    ]
  }
}