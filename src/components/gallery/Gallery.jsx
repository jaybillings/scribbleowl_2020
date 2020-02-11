import React from "react";
import {TiArrowForwardOutline} from "react-icons/ti";
import {renderCopy} from "../../js/utilities";
import ScrollTop from "../common/ScrollTop";

import "../../styles/scss/gallery.scss";

export default function Gallery(props) {
  const currentImage = props.images[props.imgIndex];
  const liveLink = props.project.uri ?
    <span>[ <a href={props.project.uri}>Live version <TiArrowForwardOutline/></a> ]</span> : '';
  const sourceLink = props.project.source ?
    <span>[ <a href={props.project.source}>Source <TiArrowForwardOutline/></a> ]</span> : '';
  const links = props.project.uri || props.project.source ? <p className={'social-link'}>{liveLink} {sourceLink}</p> : '';


  return (
    <div id={'content'} className={'gallery section'}>
      <p className={'tech'}><strong>{props.project.tech.join(', ')}</strong></p>
      {links}
      <div className={'copy'}>{renderCopy(props.project.copy)}</div>
      <hr />
      <div className={'galleryInner'}>
        <figure><a href={currentImage.name} target={'_blank'}><img alt={''} src={currentImage.name}/></a></figure>
        <figcaption>{renderCopy(currentImage.copy, 'galimg')}</figcaption>
      </div>
      <ScrollTop/>
    </div>
  )
}