import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {
  TiMediaPlayOutline,
  TiMediaPlayReverseOutline,
  TiMediaFastForwardOutline,
  TiMediaRewindOutline,
  TiHomeOutline,
  TiImage,
  TiNews
} from "react-icons/ti";
import '../../styles/gallery-nav.css';

export default class GalleryNav extends Component {
  constructor(props) {
    super(props);

    this.projIndex = this.props.projList.indexOf(this.props.projID);

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
      <nav className={'galleryNav'}>
        {/*<ul>
          <li key={'prevproj'} className={'left'}>{this.renderNavRewind()}</li>
          <li key={'previmg'} className={'left'}>{this.renderNavBack()}</li>
          <li key={'home'} className={'center'}>{this.renderNavHome()}</li>
          <li key={'nextimg'} className={'right'}>{this.renderNavNext()}</li>
          <li key={'nextproj'} className={'right'}>{this.renderNavFFwd()}</li>
        </ul>*/}
        <ul>
          <li key={'firsproj'} className={'text-left firstProj hvr-icon-wobble-horizontal'}><TiMediaRewindOutline className={'hvr-icon'}/> First project</li>
          <li key={'prevproj'} className={'text-left prevProj hvr-icon-back'}><TiMediaPlayReverseOutline className={'hvr-icon'}/> Prev project</li>
          <li key={'firstimg'} className={'text-left firstImg hvr-icon-wobble-horizontal'}><TiMediaRewindOutline className={'hvr-icon'}/> First image</li>
          <li key={'previmg'} className={'text-left prevImg hvr-icon-back'}><TiMediaPlayReverseOutline className={'hvr-icon'}/> Prev image</li>
          <li key={'home'} className={'text-center home hvr-icon-float-away'}><TiHomeOutline className={'hvr-icon'}/> Back Home</li>
          <li key={'nextimg'} className={'text-right nextImg hvr-icon-forward'}>Next image <TiMediaPlayOutline className={'hvr-icon'}/></li>
          <li key={'lastimg'} className={'text-right lastImg hvr-icon-wobble-horizontal'}>Last image <TiMediaFastForwardOutline className={'hvr-icon'}/></li>
          <li key={'nextproj'} className={'text-right nextProj hvr-icon-forward'}>Next project <TiMediaPlayOutline className={'hvr-icon'}/></li>
          <li key={'lastproj'} className={'text-right lastProj hvr-icon-wobble-horizontal'}>Last project <TiMediaFastForwardOutline className={'hvr-icon'}/></li>
        </ul>
      </nav>
    );
  }
}