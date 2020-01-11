import React, {Component} from "react";
import {renderCopy} from "../js/utilities";

import "../styles/gallery.css";

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {imgIndex: 0};
  }

  render() {
    if (!this.props.images.length) return <p className={'loading'}>Loading...</p>;

    const image = this.props.images[this.state.imgIndex];

    return (
      <div id={'gallery'} className={'section'}>
        <div className={'galleryInner'}>
          <figure><img alt={''} src={image.path}/></figure>
          <figcaption className={'copy'}>{image.copy}</figcaption>
        </div>
      </div>
    )
  }
}