import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { handleAnchorClick } from "../js/utilities";
import { TiSocialGithub, TiSocialLinkedin } from "react-icons/ti";

import '../styles/scss/header.scss';

export default class Header extends Component {
  render() {
    return (
      <header id={'top-section'}>
        <h1>
          <Link to={'#'} id={'top'} className={'sr-only show-on-focus'}>#</Link> {this.props.title}
        </h1>
        <nav className={'main-nav'}>
          <ul>{this.props.navSections.map((section) =>
            <li key={section.path} className={'nav-item text-grow-out hvr-underline-from-center'}>
              <Link to={section.path} onClick={handleAnchorClick} replace>{section.title}</Link>
            </li>)}
          </ul>
        </nav>
        <ul className={'social-nav'}>
          <li className={'hvr-icon-pop'}>
            <a href={this.props.gitHubURI} target={'_blank'} rel={'noopener noreferrer'}>
              <TiSocialGithub className={'hvr-icon'} title={'Go to Jay\'s GitHub profile'} role={'img'} />
            </a>
          </li>
          <li className={'hvr-icon-pop'}>
            <a href={this.props.linkedInURI} target={'_blank'} rel={'noopener noreferrer'}>
              <TiSocialLinkedin className={'hvr-icon'} title={'Go to Jay\'s LinkedIn profile'} role={'img'} />
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
