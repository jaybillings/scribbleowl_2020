import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { TiMediaPlayReverseOutline, TiMediaPlayOutline, TiHome } from "react-icons/ti";

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
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.projPrev.current && this.projPrev.current.click();
      if (e.key === 'ArrowRight') this.projNext.current && this.projNext.current.click();
    }, false);
  }

  renderProjPrev(projIndex) {
    const prevProjIndex = projIndex === 0 ? (this.props.projectOrder.length - 1) : projIndex - 1;
    const prevProjAlias = this.props.projectOrder[prevProjIndex];

    return <Link ref={this.projPrev} to={`/gallery/${prevProjAlias}`} rel={'prev'}
                 className={'hvr-underline-from-left'} title={'Type left arrow to go to previous project'}>
      <TiMediaPlayReverseOutline aria-hidden={true} />{this.props.projects[prevProjAlias].title} [Left arrow]
    </Link>;
  }

  renderProjNext(projIndex) {
    let nextProjIndex = projIndex + 1;
    if (nextProjIndex >= this.props.projectOrder.length) nextProjIndex = 0;

    const nextProjAlias = this.props.projectOrder[nextProjIndex];

    return <Link ref={this.projNext} to={`/gallery/${nextProjAlias}`} rel={'next'}
                 className={'hvr-underline-from-right'} title={'Type right arrow to go to next project'}>
      {this.props.projects[nextProjAlias].title} [Right Arrow] <TiMediaPlayOutline aria-hidden={true} />
    </Link>;
  }

  render() {
    const projIndex = this.props.projectOrder.indexOf(this.props.projID);

    return (
      <ul className={'proj-nav'}>
        <li key={'prev-proj'} className={'grid-start'}>{this.renderProjPrev(projIndex)}</li>
        <li key={'home'} className={'home-nav grid-center'}>
          <Link to={'/#'} className={'hvr-icon-pop'}>
            <TiHome className={'hvr-icon'} title={'Back to home page'} />
          </Link>
        </li>
        <li key={'next-proj'} className={'grid-end text-right'}>{this.renderProjNext(projIndex)}</li>
      </ul>
    )
  }
}
