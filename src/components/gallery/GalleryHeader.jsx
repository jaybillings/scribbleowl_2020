import React from 'react';
import {Link} from 'react-router-dom';

import "../../styles/gallery-header.css";

export default function GalleryHeader(props) {
  return (
    <header className={'galleryHeader'}>
      <h1 className={'grid-start'}>{props.title} ({props.year}) <small>by Jay Billings</small></h1>
      <p className={'grid-end'}><Link to={'/#top'}>Return Home</Link></p>
    </header>
  )
}