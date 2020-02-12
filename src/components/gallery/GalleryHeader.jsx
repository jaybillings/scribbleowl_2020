import React from 'react';
import {Link} from 'react-router-dom';
import {handleAnchorClick} from "../../js/utilities";

import "../../styles/scss/gallery-header.scss";

export default function GalleryHeader(props) {
  return (
    <header id={'top-section'} className={'galleryHeader'}>
      <h1 className={'grid-start'}>
        <Link to={'#top'} id={'top'} className={'sr-only show-on-focus'}>#</Link> {props.title} ({props.year}) <small>by Jay Billings</small>
      </h1>
      <Link to={location => `${location.pathname}#content`}
            onClick={handleAnchorClick}
            className={'sr-only show-on-focus skip-link'} replace>Skip to main content</Link>
    </header>
  )
}