import React from "react";
import {TiArrowForwardOutline} from "react-icons/ti";
import {renderCopy} from "../../js/utilities";
import ScrollTop from "../common/ScrollTop";

import "../../styles/scss/gallery.scss";

export default function Gallery(props) {
  const liveLink = props.project.uri ?
    <span>[ <a href={props.project.uri}>Live version <TiArrowForwardOutline/></a> ]</span> : '';
  const sourceLink = props.project.source ?
    <span>[ <a href={props.project.source}>Source <TiArrowForwardOutline/></a> ]</span> : '';
  const links = props.project.uri || props.project.source ?
    <p className={'social-link'}>{liveLink} {sourceLink}</p> : '';

  if (props.images.length) {
    const currentImage = props.images[props.imgIndex];
    const imgSrc = process.env.REACT_APP_LOCAL_IMAGES ? `/img/${props.projID}/${currentImage.name}` : currentImage.name;

    return (
      <div id={'content-section'} className={'gallery section'}>
        <a id={'content'} className={'sr-only show-on-focus'} href={'#content'}>#</a>
        <p className={'tech'}><strong>{props.project.tech.join(', ')}</strong></p>
        {links}
        <div className={'copy'}>{renderCopy(props.project.copy)}</div>
        <hr/>
        <div className={'galleryInner'}>
          <figure><a href={currentImage.name} target={'_blank'}><img alt={''} src={imgSrc}/></a></figure>
          <figcaption>{renderCopy(currentImage.copy, 'galimg')}</figcaption>
        </div>
        <ScrollTop/>
      </div>
    )
  }

  let imgSrc = process.env.REACT_APP_LOCAL_IMAGES ? `/img/${props.projID}/${props.project.thumbnail}` : props.project.thumbnail;

  return (
    <div id={'content-section'} className={'gallery section thumb-only'}>
      <div className={'gallery-content'}>
        <a id={'content'} className={'sr-only show-on-focus'} href={'#content'}>#</a>
        <p className={'tech'}><strong>{props.project.tech.join(', ')}</strong></p>
        {links}
        <div className={'copy'}>{renderCopy(props.project.copy)}</div>
      </div>
      <div className={'gallery-image'}><a href={imgSrc} target={'_blank'}><img src={imgSrc} alt={''} /></a></div>
    </div>
  )
}