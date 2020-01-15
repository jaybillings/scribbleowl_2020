import React, {Component} from 'react';
import {Link} from "react-router-dom";

import '../../styles/gallery-nav.css';

export default class GalleryNav extends Component {
  constructor(props) {
    super(props);

    this.renderNavItems = this.renderNavItems.bind(this);
  }

  renderNavItems() {
    const projIndex = this.props.projList.indexOf(this.props.projID) || -1;

    let navItems = [];

    if (projIndex > 0) navItems.push(<li key={'prevproj'}><Link
      to={`/gallery/${this.props.projList[projIndex - 1]}/`} className={'left'}>&lt;&lt; Prev Project</Link></li>);
    else navItems.push(<li key={'prevproj'} className={'left inactive'}>&lt;&lt; Prev Project</li>);

    if (this.props.imgIndex > 0) navItems.push(<li key={'previmg'}><Link
      to={`/gallery/${this.props.projID}/${this.props.imgIndex - 1}`} className={'left'}>&lt; Prev image</Link></li>);
    else navItems.push(<li key={'previmg'} className={'left inactive'}>&lt; Prev image</li>);

    navItems.push(<li key={'home'} className={'center'}><Link to={'/'}>Home</Link></li>);

    if (this.props.imgIndex < this.props.images.length - 1) navItems.push(<li key={'nextimg'}><Link
      to={`/gallery/${this.props.projID}/${this.props.imgIndex + 1}`} className={'right'}>Next image &gt;</Link></li>);
    else navItems.push(<li key={'nextimg'} className={'right inactive'}>Next image &gt;</li>);

    if (projIndex < this.props.projList.length - 1) navItems.push(<li key={'nextproj'}><Link
      to={`/gallery/${this.props.projList[projIndex + 1]}`} className={'right'}>Next Project &gt;&gt;</Link></li>);
    else navItems.push(<li key={'nextproj'} className={'right inactive'}>Next Project &gt;&gt;</li>);

    return navItems;
  }

  render() {
    return (
      <nav className={'galleryNav'}>
        <ul>
          {this.renderNavItems().map(item => item)}
        </ul>
      </nav>
    );
  }
}