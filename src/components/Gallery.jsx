import React, {Component} from "react";
import {renderCopy} from "../js/utilities";

import "../styles/gallery.css";

export default class Gallery extends Component {
  render() {
    if (!this.props.images.length) return <p className={'loading'}>Loading...</p>;

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
}