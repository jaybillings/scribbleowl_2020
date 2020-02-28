import React, { Component } from "react";
import ScrollTop from "../common/ScrollTop";
import ReactMarkdown from "react-markdown";
import { TiArrowForwardOutline } from "react-icons/ti";

import "../../styles/scss/gallery.scss";
import { renderTechList } from "../../js/utilities";
import { Redirect } from "react-router";

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.renderThumbOnlyLayout = this.renderThumbOnlyLayout.bind(this);
    this.renderGalleryLayout = this.renderGalleryLayout.bind(this);
    this.renderExternalLinks();
  }

  renderThumbOnlyLayout() {
    let imgSrc = process.env.REACT_APP_LOCAL_IMAGES ? `${process.env.PUBLIC_URL}/img/${this.props.projID}/${this.props.project.thumbnail}`
      : this.props.project.thumbnail;

    return (
      <div className={'gallery section thumb-only'}>
        <div className={'gallery-content'}>
          <a id={'content'} className={'sr-only show-on-focus'} href={'#content'}>#</a>
          {this.renderExternalLinks()}
          <ul className={'tech'}>{renderTechList(this.props.project.tech)}</ul>
          <div className={'copy'}><ReactMarkdown source={this.props.project.copy} /></div>
        </div>
        <div className={'gallery-image'}><a href={imgSrc}><img src={imgSrc} alt={''} /></a></div>
      </div>
    )
  }

  renderGalleryLayout(inks) {
    if (typeof this.props.images[this.props.imgIndex] === 'undefined') return <Redirect to={'/404'} />;

    const imageData = this.props.images[this.props.imgIndex];
    const imgSrc = process.env.REACT_APP_LOCAL_IMAGES ? `/img/${this.props.projID}/${imageData.name}` : imageData.name;

    if (!imageData) return <Redirect to={'/oops'} />;

    return (
      <div className={'gallery section'}>
        <a id={'content'} className={'sr-only show-on-focus'} href={'#content'}>#</a>
        {this.renderExternalLinks()}
        <ul className={'tech'}>{renderTechList(this.props.project.tech)}</ul>
        <div className={'copy'}><ReactMarkdown source={this.props.project.copy} /></div>
        <hr />
        <div className={'gallery-inner'}>
          <figure><a href={imgSrc}><img alt={imageData.alt || ''} src={imgSrc} /></a></figure>
          <figcaption className={'copy'}>
            {imageData.title ? <h2><ReactMarkdown source={imageData.title} /></h2> : ''}
            <ReactMarkdown source={imageData.copy} />
          </figcaption>
        </div>
        <ScrollTop />
      </div>
    )
  }

  renderExternalLinks() {
    let links = [];

    const projURI = this.props.project.uri;
    if (projURI) links.push(<span>[ <a href={projURI} target={'_blank'} rel={'noreferrer noopener'}>
      Live version <TiArrowForwardOutline aria-hidden={true} /></a> ]</span>);

    const projSource = this.props.project.source;
    if (projSource) {
      if (projSource.length) {
        projSource.forEach(link => {
          links.push(<span key={link.name}>[ <a href={link.uri} target={'_blank'} rel={'noreferrer noopener'}>
            {link.name} Source <TiArrowForwardOutline aria-hidden={true} /></a> ]</span>);
        });
      } else {
        links.push(<span>[ <a href={projSource} target={'_blank'} rel={'noreferrer noopener'}>Source <TiArrowForwardOutline aria-hidden={true} /></a> ]</span>)
      }
    }

    return <p className={'standalone-link'}>{links.map(link => link)}</p>
  }

  render() {
    if (this.props.images.length) return this.renderGalleryLayout();
    return this.renderThumbOnlyLayout();
  }
}