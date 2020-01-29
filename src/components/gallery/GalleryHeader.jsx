import React from 'react';
import {Link} from 'react-router-dom';

import "../../styles/gallery-header.css";

export default function GalleryHeader(props) {
  return (
    <header className={'galleryHeader'}>
      <h1>{props.title} ({props.year}) <span>by <Link to={'/'}>Jay Billings</Link></span></h1>
    </header>
  )
}