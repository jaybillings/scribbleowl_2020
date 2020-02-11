import React from 'react';
import {Link} from 'react-router-dom';

import "../../styles/scss/gallery-header.scss";

export default function GalleryHeader(props) {
  return (
    <header className={'galleryHeader'}>
      <h1 className={'grid-start'}>{props.title} ({props.year}) <small>by <Link to={'/#top'}>Jay Billings</Link></small></h1>
      {/*<div><Link to={location => `#content`} className={'only'}>Skip to main content</Link></div> -- why isn't this scrolling? */}
    </header>
  )
}