import React, {Component} from 'react';
import {TiSocialGithub, TiSocialLinkedin} from "react-icons/ti";
import {NavHashLink as NavLink} from "react-router-hash-link";

import '../styles/scss/header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 className={'hvr-wobble-skew'}>{this.props.title}</h1>
        <nav className={'main-nav'}>
          <ul>{this.props.navSections.map((section, idx) =>
            <li key={section.path} className={'nav-item hvr-grow hvr-underline-from-center'}>
              <NavLink to={`/${section.path}`} isActive={(match, location) => {
                if (!match) return false;
                return location.hash === `#${section.path}`;
              }} activeClassName={'current'}>{section.title}
              </NavLink>
            </li>)}
          </ul>
        </nav>
        <ul className={'social-nav'}>
          <li className={'hvr-icon-pop'}>
            <a href={'https://github.com/jaybillings'} target={'_blank'}>
              <TiSocialGithub className={'hvr-icon'} title={'Go to Jay\'s GitHub profile'} role={'img'} />
            </a>
          </li>
          <li className={'hvr-icon-pop'}>
            <a href={'https://www.linkedin.com/in/jaybillings/'} target={'_blank'}>
              <TiSocialLinkedin className={'hvr-icon'} title={'Go to Jay\'s LinkedIn profile'} role={'img'} />
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
