import React from "react";
import {renderCopy} from "../../js/utilities";

import Loading from "../common/Loading";

import "../../styles/gallery.css";

export default function Gallery(props) {
  if (!props.images.length) return <Loading/>;

  const image = props.images[props.imgIndex];

  return (
    <div className={'gallery'}>
      <div className={'galleryInner'}>
        <figure><img alt={''} src={image.path}/></figure>
        <figcaption className={'copy'}>{renderCopy(image.copy, 'galimg')}</figcaption>
      </div>
    </div>
  )
}