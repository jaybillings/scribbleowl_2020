import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {handleAnchorClick} from "../js/utilities";
import {TiSocialGithub, TiSocialLinkedin} from "react-icons/ti";

import '../styles/scss/header.scss';

export default class Header extends Component {
  render() {
    return (
      <header id={'top-section'}>
        <h1 className={'hvr-wobble-skew'}>
          <Link to={'#top'} id={'top'} className={'sr-only show-on-focus'}>#</Link>
          {this.props.title}
        </h1>
        <nav className={'main-nav'}>
          <ul>{this.props.navSections.map((section, idx) =>
            <li key={section.path} className={'nav-item hvr-grow hvr-underline-from-center'}>
              <Link to={section.path} onClick={handleAnchorClick}
                    className={'nav-item hvr-grow hvr-underline-from-center'} replace>{section.title}</Link>
            </li>)}
          </ul>
        </nav>
        <ul className={'social-nav'}>
          <li className={'hvr-icon-pop'}>
            <a href={'https://github.com/jaybillings'} target={'_blank'}>
              <TiSocialGithub className={'hvr-icon'} title={'Go to Jay\'s GitHub profile'} role={'img'}/>
            </a>
          </li>
          <li className={'hvr-icon-pop'}>
            <a href={'https://www.linkedin.com/in/jaybillings/'} target={'_blank'}>
              <TiSocialLinkedin className={'hvr-icon'} title={'Go to Jay\'s LinkedIn profile'} role={'img'}/>
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
