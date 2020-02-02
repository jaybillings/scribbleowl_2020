import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {
  TiHomeOutline,
  TiMediaFastForwardOutline,
  TiMediaPlayOutline,
  TiMediaPlayReverseOutline,
  TiMediaRewindOutline
} from "react-icons/ti";

export default class GalleryImageNav extends Component {
  constructor(props) {
    super(props);

    this.renderNavRewind = this.renderNavRewind.bind(this);
    this.renderNavBack = this.renderNavBack.bind(this);
    this.renderNavHome = this.renderNavHome.bind(this);
    this.renderNavNext = this.renderNavNext.bind(this);
    this.renderNavFFwd = this.renderNavFFwd.bind(this);
  }

  renderNavRewind() {
    if (this.projIndex > 0) return <Link
      to={`/gallery/${this.props.projList[this.projIndex - 1]}`}><TiMediaRewindOutline/> Prev Project</Link>;
    return <span><TiMediaRewindOutline/> Prev Project</span>
  }

  renderNavBack() {
    if (this.props.imgIndex > 0) return <Link
      to={`/gallery/${this.props.projID}/${this.props.imgIndex - 1}`}
      className={'hvr-icon-back'}><TiMediaPlayReverseOutline className={'hvr-icon'}/> Prev Image</Link>;
    return <span><TiMediaPlayReverseOutline/> Prev Image</span>
  }

  renderNavHome() {
    return <Link to={'/'}>Return <TiHomeOutline/> Home</Link>;
  }

  renderNavNext() {
    if (this.props.imgIndex < this.props.imgCount - 1) return <Link
      to={`/gallery/${this.props.projID}/${this.props.imgIndex + 1}`} className={'text-right hvr-icon-forward'}>Next
      image <TiMediaPlayOutline className={'hvr-icon'}/></Link>;

    return <span>Next image <TiMediaPlayOutline/></span>;
  }

  renderNavFFwd() {
    if (this.projIndex < (this.props.projList.length - 1)) return <Link
      to={`/gallery/${this.props.projList[this.projIndex + 1]}`} className={'text-right'}>Next
      Project <TiMediaFastForwardOutline/></Link>;

    if (this.props.imgIndex === this.props.projList.length - 1) return <Link
      to={`/gallery/${this.props.projList[0]}/0`}>First project <TiMediaFastForwardOutline/></Link>;

    return <span>next project <TiMediaFastForwardOutline/></span>;
  }

  render() {
    return (
      <div className={'imageNav'}>
        <ul>
          <li key={'firstimg'} className={'text-left firstImg hvr-icon-wobble-horizontal'}><TiMediaRewindOutline
            className={'hvr-icon'}/> First image
          </li>
          <li key={'previmg'} className={'text-left prevImg hvr-icon-back'}><TiMediaPlayReverseOutline
            className={'hvr-icon'}/> Prev image
          </li>
          <li key={'home'} className={'text-center home hvr-icon-float-away'}><TiHomeOutline
            className={'hvr-icon'}/> Back
            Home
          </li>
          <li key={'nextimg'} className={'text-right nextImg hvr-icon-forward'}>Next image <TiMediaPlayOutline
            className={'hvr-icon'}/></li>
          <li key={'lastimg'} className={'text-right lastImg hvr-icon-wobble-horizontal'}>Last
            image <TiMediaFastForwardOutline className={'hvr-icon'}/></li>
        </ul>
      </div>
    );
  }
}
