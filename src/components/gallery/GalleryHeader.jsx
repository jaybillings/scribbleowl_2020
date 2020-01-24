import React from 'react';
import {Link} from 'react-router-dom';

import "../../styles/gallery-header.css";

export default function GalleryHeader(props) {
  return (
    <header className={'galleryHeader'}>
      <h1>"{props.title}" by <Link to={'/'}>Jay Billings</Link></h1>
    </header>
  )
}