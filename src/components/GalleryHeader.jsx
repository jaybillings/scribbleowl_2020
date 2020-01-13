import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "../styles/gallery-header.css";

export default class GalleryHeader extends Component {
  render() {
    if (!this.props.projects[this.props.projID]) return <header><Link to={'/'}><h1>Jay Billings</h1></Link></header>;

    const projName = this.props.projects[this.props.projID].title;

    return (
      <header id={'galleryHeader'}>
        <h1>"{projName}" by Jay Billings</h1>
      </header>
    );
  }
}