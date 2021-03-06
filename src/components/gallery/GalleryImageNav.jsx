import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  TiMediaFastForwardOutline,
  TiMediaPlayOutline,
  TiMediaPlayReverseOutline,
  TiMediaRewindOutline
} from "react-icons/ti";

export default class GalleryImageNav extends Component {
  constructor(props) {
    super(props);

    this.imgFirstRef = React.createRef();
    this.imgLastRef = React.createRef();
    this.imgPrevRef = React.createRef();
    this.imgNextRef = React.createRef();

    this.renderImgFirst = this.renderImgFirst.bind(this);
    this.renderImgBack = this.renderImgBack.bind(this);
    this.renderImgNext = this.renderImgNext.bind(this);
    this.renderImgLast = this.renderImgLast.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case 'a':
          this.imgPrevRef.current && this.imgPrevRef.current.click();
          break;
        case 'd':
          this.imgNextRef.current && this.imgNextRef.current.click();
          break;
        case 'w':
          if (this.imgFirstRef.current) this.imgFirstRef.current.click();
          break;
        case 's':
          if (this.imgLastRef.current) this.imgLastRef.current.click();
          break;
        default:
          break;
      }
    }, false)
  }

  renderImgFirst() {
    if (this.props.imgIndex > 0) return (
      <Link ref={this.imgFirstRef}
            to={`/gallery/${this.props.projID}/0`}
            className={'active hvr-icon-wobble-horizontal wobble-horizontal-reverse'}
            title={'Type W to go to first image.'}>
        <span>First Image [W]</span><TiMediaRewindOutline className={'hvr-icon'} aria-hidden={true} />
      </Link>);

    return <div className={'inactive'}><span>First Image [W]</span><TiMediaRewindOutline aria-hidden={true} /></div>
  }

  renderImgBack() {
    if (this.props.imgIndex > 0) return (
      <Link ref={this.imgPrevRef}
            to={`/gallery/${this.props.projID}/${this.props.imgIndex - 1}`}
            className={'active hvr-icon-wobble-horizontal wobble-horizontal-reverse-min'}
            rel={'prev'}
            title={'Type A to go to previous image.'}>
        <span>Previous Image [A]</span><TiMediaPlayReverseOutline className={'hvr-icon'} aria-hidden={true} /></Link>);

    return <div className={'inactive'}><span>Previous Image [A]</span><TiMediaPlayReverseOutline aria-hidden={true} />
    </div>;
  }

  renderImgNext() {
    if (this.props.imgIndex < this.props.imgCount - 1) return (
      <Link ref={this.imgNextRef}
            to={`/gallery/${this.props.projID}/${this.props.imgIndex + 1}`}
            rel={'next'}
            className={'active hvr-icon-wobble-horizontal wobble-horizontal-min'}
            title={'Type D to go to next image.'}>
        <span>Next Image [D]</span><TiMediaPlayOutline className={'hvr-icon'} aria-hidden={true} /></Link>);

    return <div className={'inactive'}><span>Next Image [D]<TiMediaPlayOutline aria-hidden={true} /></span></div>;
  }

  renderImgLast() {
    const lastIndex = this.props.imgCount - 1;

    if (this.props.imgIndex < lastIndex) return (
      <Link ref={this.imgLastRef}
            to={`/gallery/${this.props.projID}/${lastIndex}`}
            className={'active hvr-icon-wobble-horizontal'}
            title={'Type S to go to last image.'}>
        <span>Last Image [S]</span><TiMediaFastForwardOutline className={'hvr-icon'} aria-hidden={true} /></Link>);

    return <div className={'inactive'}><span>Last Image [S]</span> <TiMediaFastForwardOutline aria-hidden={true} /></div>;
  }

  render() {
    return (
      <ul className={'image-nav'}>
        <li key={'img-first'} className={'grid-start'}>{this.renderImgFirst()}</li>
        <li key={'img-prev'} className={'grid-start'}>{this.renderImgBack()}</li>
        <li key={'nav-location'} className={'nav-location grid-center text-center'}>
          <span>Image</span> <span>{this.props.imgIndex + 1} of {this.props.imgCount}</span>
        </li>
        <li key={'img-next'} className={'grid-end text-right'}>{this.renderImgNext()}</li>
        <li key={'img-last'} className={'grid-end text-right'}>{this.renderImgLast()}</li>
      </ul>
    );
  }
}
