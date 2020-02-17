import React, {Component} from "react";
import ScrollTop from "../common/ScrollTop";
import ReactMarkdown from "react-markdown";
import {TiArrowForwardOutline} from "react-icons/ti";

import "../../styles/scss/gallery.scss";

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.renderThumbOnlyLayout = this.renderThumbOnlyLayout.bind(this);
    this.renderGalleryLayout = this.renderGalleryLayout.bind(this);
  }

  renderThumbOnlyLayout(links) {
    let imgSrc = process.env.REACT_APP_LOCAL_IMAGES ? `/img/${this.props.projID}/${this.props.project.thumbnail}` : this.props.project.thumbnail;

    return (
      <div id={'content-section'} className={'gallery section thumb-only'}>
        <div className={'gallery-content'}>
          <a id={'content'} className={'sr-only show-on-focus'} href={'#content'}>#</a>
          <p className={'tech'}><strong>{this.props.project.tech.join(', ')}</strong></p>
          {links}
          <div className={'copy'}><ReactMarkdown source={this.props.project.copy}/></div>
        </div>
        <div className={'gallery-image'}><a href={imgSrc} target={'_blank'}><img src={imgSrc} alt={''}/></a></div>
      </div>
    )
  }

  renderGalleryLayout(links) {
    const imageData = this.props.images[this.props.imgIndex];
    const imgSrc = process.env.REACT_APP_LOCAL_IMAGES ? `/img/${this.props.projID}/${imageData.name}` : imageData.name;

    return (
      <div id={'content-section'} className={'gallery section'}>
        <a id={'content'} className={'sr-only show-on-focus'} href={'#content'}>#</a>
        <p className={'tech'}><strong>{this.props.project.tech.join(', ')}</strong></p>
        {links}
        <div className={'copy'}><ReactMarkdown source={this.props.project.copy}/></div>
        <hr/>
        <div className={'galleryInner'}>
          <figure><a href={imgSrc} target={'_blank'}><img alt={imageData.alt || ''} src={imgSrc}/></a></figure>
          <figcaption className={'copy'}>{imageData.title ? <h3>{imageData.title}</h3> : ''}<ReactMarkdown source={imageData.copy}/></figcaption>
        </div>
        <ScrollTop/>
      </div>
    )
  }

  render() {
    const liveLink = this.props.project.uri ?
      <span>[ <a href={this.props.project.uri}>Live version <TiArrowForwardOutline/></a> ]</span> : '';
    const sourceLink = this.props.project.source ?
      <span>[ <a href={this.props.project.source}>Source <TiArrowForwardOutline/></a> ]</span> : '';
    const links = this.props.project.uri || this.props.project.source ?
      <p className={'social-link'}>{liveLink} {sourceLink}</p> : '';

    if (this.props.images.length) {
      return this.renderGalleryLayout(links);
    }

    return this.renderThumbOnlyLayout(links);
  }
}