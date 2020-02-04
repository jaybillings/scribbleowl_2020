import React from "react";
import {renderCopy} from "../../js/utilities";

import "../../styles/gallery.css";

export default function Gallery(props) {
  const currentImage = props.images[props.imgIndex];
  const projLink = props.project.uri ? <p className={'live-link'}>Visit live version at <a href={props.project.uri} target={'_blank'}>{props.project.uri}</a>.</p> : '';

  return (
    <div className={'gallery'}>
      <p className={'tech'}><strong>{props.project.tech.join(', ')}</strong></p>
      {projLink}
      {renderCopy(props.project.copy)}
      <div className={'galleryInner'}>
        <figure><img alt={''} src={currentImage.name}/></figure>
        <figcaption className={'copy'}>{renderCopy(currentImage.copy, 'galimg')}</figcaption>
      </div>
    </div>
  )
}