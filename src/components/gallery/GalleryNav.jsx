import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {TiMediaPlayReverseOutline, TiMediaPlayOutline, TiHome} from "react-icons/ti";
import GalleryImageNav from "./GalleryImageNav";

import '../../styles/scss/gallery-nav.scss';

export default class GalleryNav extends Component {
  constructor(props) {
    super(props);

    this.renderProjPrev = this.renderProjPrev.bind(this);
    this.renderProjNext = this.renderProjNext.bind(this);
    /* TODO: Reclaim focus on prev/next paging */
  }

  renderProjPrev(projIndex) {
    const prevProjIndex = projIndex === 0 ? (this.props.projectOrder.length - 1) : projIndex - 1;
    const prevProjAlias = this.props.projectOrder[prevProjIndex];

    return (
      <Link to={`/gallery/${prevProjAlias}`} className={'hvr-underline-from-left'}>
        <TiMediaPlayReverseOutline/>{this.props.projects[prevProjAlias].title}
      </Link>);
  }

  renderProjNext(projIndex) {
    let nextProjIndex = projIndex + 1;
    if (nextProjIndex >= this.props.projectOrder.length) nextProjIndex = 0;

    const nextProjAlias = this.props.projectOrder[nextProjIndex];

    return <Link to={`/gallery/${nextProjAlias}`}
                 className={'hvr-underline-from-right'}>{this.props.projects[nextProjAlias].title} <TiMediaPlayOutline/></Link>;
  }

  render() {
    const projIndex = this.props.projectOrder.indexOf(this.props.projID);

    return (
      <nav className={'galleryNav'}>
        <ul className={'projNav'}>
          <li key={'prev-proj'} className={'grid-start'}>{this.renderProjPrev(projIndex)}</li>
          <li key={'home'} className={'home-nav grid-center'}><Link to={'/#top'} className={'hvr-icon-pop'}><TiHome
            className={'hvr-icon'}/></Link></li>
          <li key={'next-proj'} className={'grid-end text-right'}>{this.renderProjNext(projIndex)}</li>
        </ul>
        <GalleryImageNav imgIndex={this.props.imgIndex} imgCount={this.props.imgCount} projID={this.props.projID}/>
      </nav>
    )
  }
}
