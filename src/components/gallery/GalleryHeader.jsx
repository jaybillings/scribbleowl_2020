import React from 'react';
import {Link} from 'react-router-dom';

import "../../styles/gallery-header.css";

export default function GalleryHeader(props) {
  return (
    <header className={'galleryHeader'}>
      <h1 className={'grid-start'}>{props.title} ({props.year})</h1>
      <h2 className={'grid-end'}>by <Link to={'/#top'}>Jay Billings</Link></h2>
    </header>
  )
}