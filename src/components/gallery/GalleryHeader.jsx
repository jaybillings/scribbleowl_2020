import React from 'react';
import {Link} from 'react-router-dom';

import "../../styles/gallery-header.css";

export default function GalleryHeader(props) {
  if (!props.projects[props.projID]) return <header><Link to={'/'}><h1>Jay Billings</h1></Link></header>;

  const projName = props.projects[props.projID].title;

  return (
    <header className={'galleryHeader'}>
      <h1>"{projName}" by <Link to={'/'}>Jay Billings</Link></h1>
    </header>
  )
}