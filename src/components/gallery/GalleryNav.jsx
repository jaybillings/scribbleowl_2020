import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {TiMediaPlayReverseOutline, TiMediaPlayOutline} from "react-icons/ti";

import GalleryImageNav from "./GalleryImageNav";

import '../../styles/gallery-nav.css';

export default class GalleryNav extends Component {
  constructor(props) {
    super(props);

    this.projIndex = props.projectOrder.indexOf(props.projID);

    this.renderNavPrev = this.renderNavPrev.bind(this);
    this.renderNavNext = this.renderNavNext.bind(this);
  }

  renderNavPrev() {
    const prevProjIndex = this.projIndex === 0 ? (this.props.projectOrder.length - 1) : this.projIndex - 1;
    const prevProjAlias = this.props.projectOrder[prevProjIndex];


    return <li className={'grid-start'}><TiMediaPlayReverseOutline/> <Link to={`/gallery/${prevProjAlias}`}>{this.props.projects[prevProjAlias].title}</Link></li>
  }

  renderNavNext() {
    const nextProjIndex = this.projIndex >= this.props.projectOrder.length ? 0 : this.projIndex + 1;
    const nextProjAlias = this.props.projectOrder[nextProjIndex];

    return <li className={'grid-end'}><Link to={`/gallery/${nextProjAlias}`}>{this.props.projects[nextProjAlias].title}</Link> <TiMediaPlayOutline/></li>;
  }

  render() {
    return (
      <nav className={'galleryNav'}>
        <div className={'projNav'}>
          <ul>
            {this.renderNavPrev()}
            {this.renderNavNext()}
          </ul>
        </div>
        <GalleryImageNav className={'imageNav'}/>
      </nav>
    )
  }
}
