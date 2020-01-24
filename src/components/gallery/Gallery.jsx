import React from "react";
import {renderCopy} from "../../js/utilities";

import "../../styles/gallery.css";

export default function Gallery(props) {
  const currentImage = props.images[props.imgIndex];

  return (
    <div className={'gallery'}>
      <div className={'galleryInner'}>
        <figure><img alt={''} src={currentImage.name}/></figure>
        <figcaption className={'copy'}>{renderCopy(currentImage.copy, 'galimg')}</figcaption>
      </div>
    </div>
  )
}