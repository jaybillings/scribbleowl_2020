import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {TiMediaPlayReverseOutline, TiMediaPlayOutline, TiHome} from "react-icons/ti";
import GalleryImageNav from "./GalleryImageNav";

import '../../styles/scss/gallery-nav.scss';

export default class GalleryNav extends Component {
  constructor(props) {
    super(props);

    this.projPrev = React.createRef();
    this.projNext = React.createRef();

    this.renderProjPrev = this.renderProjPrev.bind(this);
    this.renderProjNext = this.renderProjNext.bind(this);
  }

  componentDidMount() {
    document.onkeydown = (e) => {
      console.log('proj key', e.key);
      switch(e.key) {
        case 'ArrowRight':
          this.projPrev.current && this.projPrev.current.click();
          break;
        case 'ArrowLeft':
          this.projNext.current && this.projNext.current.click();
          break;
        default:
          break;
      }
    }
  }

  renderProjPrev(projIndex) {
    const prevProjIndex = projIndex === 0 ? (this.props.projectOrder.length - 1) : projIndex - 1;
    const prevProjAlias = this.props.projectOrder[prevProjIndex];

    return <Link ref={this.projPrev} to={`/gallery/${prevProjAlias}`} className={'hvr-underline-from-left'}>
      <TiMediaPlayReverseOutline title={'Type left arrow to go to previous project'}/>{this.props.projects[prevProjAlias].title}
    </Link>;
  }

  renderProjNext(projIndex) {
    let nextProjIndex = projIndex + 1;
    if (nextProjIndex >= this.props.projectOrder.length) nextProjIndex = 0;

    const nextProjAlias = this.props.projectOrder[nextProjIndex];

    return <Link ref={this.projNext} to={`/gallery/${nextProjAlias}`} className={'hvr-underline-from-right'}>
      {this.props.projects[nextProjAlias].title} <TiMediaPlayOutline title={'Type right arrow to go to next project'}/>
    </Link>;
  }

  render() {
    const projIndex = this.props.projectOrder.indexOf(this.props.projID);

    return (
      <nav className={'gallery-nav'}>
        <ul className={'proj-nav'}>
          <li key={'prev-proj'} className={'grid-start'}>{this.renderProjPrev(projIndex)}</li>
          <li key={'home'} className={'home-nav grid-center'}>
            <Link to={'/#top'} className={'hvr-icon-pop'}>
              <TiHome className={'hvr-icon'} title={'Back to home page'}/>
            </Link>
          </li>
          <li key={'next-proj'} className={'grid-end text-right'}>{this.renderProjNext(projIndex)}</li>
        </ul>
        {this.props.imgCount > 0 ? <GalleryImageNav imgIndex={this.props.imgIndex} imgCount={this.props.imgCount} projID={this.props.projID}/> : ''}
      </nav>
    )
  }
}
