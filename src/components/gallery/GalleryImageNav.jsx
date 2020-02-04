import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {
  TiMediaFastForwardOutline,
  TiMediaPlayOutline,
  TiMediaPlayReverseOutline,
  TiMediaRewindOutline
} from "react-icons/ti";

export default class GalleryImageNav extends Component {
  constructor(props) {
    super(props);

    this.renderImgFirst = this.renderImgFirst.bind(this);
    this.renderImgBack = this.renderImgBack.bind(this);
    this.renderImgNext = this.renderImgNext.bind(this);
    this.renderImgLast = this.renderImgLast.bind(this);
  }

  renderImgFirst() {
    if (this.props.imgIndex > 0) return <Link
      to={`/gallery/${this.props.projID}/0`} className={'hvr-icon-wobble-horizontal wobble-horizontal-reverse'}>
      <TiMediaRewindOutline className={'hvr-icon'}/> First Image</Link>;

    return <span><TiMediaRewindOutline/> First Image</span>;
  }

  renderImgBack() {
    if (this.props.imgIndex > 0) return <Link
      to={`/gallery/${this.props.projID}/${this.props.imgIndex - 1}`} className={'hvr-icon-wobble-horizontal wobble-horizontal-reverse wobble-horizontal-min'}>
      <TiMediaPlayReverseOutline className={'hvr-icon'}/> Previous Image</Link>;

    return <span><TiMediaPlayReverseOutline/> Previous Image</span>;
  }

  renderImgNext() {
    if (this.props.imgIndex < this.props.imgCount - 1) return <Link
      to={`/gallery/${this.props.projID}/${this.props.imgIndex + 1}`} className={'hvr-icon-wobble-horizontal wobble-horizontal-min'}>Next
      Image <TiMediaPlayOutline className={'hvr-icon'}/></Link>;

    return <span>Next Image <TiMediaPlayOutline/></span>;
  }

  renderImgLast() {
    const lastIndex = this.props.imgCount - 1;

    if (this.props.imgIndex < lastIndex) return <Link
      to={`/gallery/${this.props.projID}/${lastIndex}`} className={'hvr-icon-wobble-horizontal'}>Last
      Image <TiMediaFastForwardOutline className={'hvr-icon'}/></Link>;

    return <span>Last Image <TiMediaFastForwardOutline/></span>;
  }

  render() {
    return (
      <ul className={'imageNav'}>
        <li key={'img-first'} className={'grid-start'}>{this.renderImgFirst()}</li>
        <li key={'img-prev'} className={'grid-start'}>{this.renderImgBack()}</li>
        <li key={'nav-location'} className={'nav-location grid-center text-center'}>
          <span>Image {this.props.imgIndex + 1} of {this.props.imgCount}</span>
        </li>
        <li key={'img-next'} className={'grid-end text-right'}>{this.renderImgNext()}</li>
        <li key={'img-last'} className={'grid-end text-right'}>{this.renderImgLast()}</li>
      </ul>
    );
  }
}
