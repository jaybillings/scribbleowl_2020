import React from "react";
import {renderCopy} from "../../js/utilities";

import Loading from "../Loading";

import "../../styles/gallery.css";

export default function Gallery(props) {
  if (!this.props.images.length) return <Loading/>;

  const image = this.props.images[this.props.imgIndex];

  return (
    <div id={'galleryMain'} className={'section'}>
      <div className={'galleryInner'}>
        <figure><img alt={''} src={image.path}/></figure>
        <figcaption className={'copy'}>{renderCopy(image.copy)}</figcaption>
      </div>
    </div>
  )
}