import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "../styles/header.css";
import "../styles/gallery-header.css"

export default class GalleryHeader extends Component {
  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
    this.renderNav = this.renderNav.bind(this);
  }

  renderHeader() {
    if (!this.props.projName) return <header><Link to={'/'}><h1>Jay Billings</h1></Link></header>;

    return (
      <header>
        <h1>{this.props.projName}</h1>
        <p><Link to={'/'}>by Jay Billings</Link></p>
      </header>
    );
  }

  renderNav() {
    if (!this.props.projList) return '';

    const projIndex = this.props.projList.indexOf(this.props.projID);
    console.info('indx', projIndex);

    return [
      <nav>
      <ul>
        <li className={`left${projIndex > 0 ? ' clickable' : ''}`}>&lt;&lt; Prev Project</li>
        <li className={'left'}>&lt; Prev image</li>
        <li className={'right'}>Next image &gt;</li>
        <li className={`right${projIndex < this.props.projList.length ? ' clickable' : ''}`}>Next Project &gt;&gt;</li>
      </ul>
    </nav>
    ]
  }

  render() {
    return [
      this.renderHeader(),
      this.renderNav()
    ]
  }
}