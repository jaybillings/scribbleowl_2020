import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import ScrollTop from "../common/ScrollTop";
import ExternalLinks from "../common/ExternalLinks";

import "../../styles/scss/gallery.scss";
import { renderTechList } from "../../js/utilities";
import { Redirect } from "react-router";

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.renderThumbLayoutImage = this.renderThumbLayoutImage.bind(this);
    this.renderGalleryLayout = this.renderGalleryLayout.bind(this);
  }

  renderThumbLayoutImage() {
    if (!this.props.project.thumbnail) return '';

    const imgSrc = `${process.env.PUBLIC_URL}/img/${this.props.projID}/${this.props.project.thumbnail}`;
    return <div className={'gallery-image'}><a href={imgSrc}><img src={imgSrc} alt={''} /></a></div>;
  }

  renderGalleryLayout() {
    if (typeof this.props.images[this.props.imgIndex] === 'undefined') return <Redirect to={'/404'} />;

    const imageData = this.props.images[this.props.imgIndex];
    const imgSrc = `/img/${this.props.projID}/${imageData.name}`;

    if (!imageData) return <Redirect to={'/oops'} />;

    return (
      <div className={'gallery section'}>
        <a id={'content'} className={'sr-only show-on-focus'} href={'#content'}>#</a>
        <ExternalLinks source={this.props.project.source} uri={this.props.project.uri} />
        <ul className={'tech'}>{renderTechList(this.props.project.tech)}</ul>
        <div className={'copy'}><ReactMarkdown source={this.props.project.copy} /></div>
        <hr />
        <div className={'gallery-inner'}>
          {imageData.title ? <ReactMarkdown source={'## ' + imageData.title} /> : ''}
          <figure><a href={imgSrc}><img alt={imageData.alt || ''} src={imgSrc} /></a></figure>
          <figcaption className={'copy'}>
            <ReactMarkdown source={imageData.copy} />
          </figcaption>
        </div>
        <ScrollTop />
      </div>
    )
  }

  render() {
    if (this.props.images.length) return this.renderGalleryLayout();

    // Thumbnail only layout
    return (
      <div className={'gallery section thumb-only'}>
        <div className={'gallery-content'}>
          <a id={'content'} className={'sr-only show-on-focus'} href={'#content'}>#</a>
          <ExternalLinks source={this.props.project.source} uri={this.props.project.uri} />
          <ul className={'tech'}>{renderTechList(this.props.project.tech)}</ul>
          <div className={'copy'}><ReactMarkdown source={this.props.project.copy} /></div>
        </div>
        {this.renderThumbLayoutImage()}
        <ScrollTop/>
      </div>
    )
  }
}