import React, {Component} from 'react';
import {TiSocialGithub, TiSocialLinkedin} from "react-icons/ti";
import {NavHashLink as NavLink} from "react-router-hash-link";

import '../styles/header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 className={'hvr-wobble-skew'}>{this.props.title}</h1>
        <nav>
          <ul>{this.props.navSections.map((section, idx) =>
            <li key={section.path} className={'hvr-grow hvr-underline-from-center'}>
              <NavLink to={`/${section.path}`} isActive={(match, location) => {
                if (!match) return false;
                return location.hash === `#${section.path}`;
              }} activeClassName={'current'}>{section.title}
              </NavLink>
            </li>)}
            <li className={'hvr-icon-pop'}><a href={'https://github.com/jaybillings'} target={'_blank'}>
              <TiSocialGithub className={'hvr-icon'}/><span className={'sr-only'}>GitHub Profile</span></a>
            </li>
            <li className={'hvr-icon-pop'}><a href={'https://www.linkedin.com/in/jaybillings/'} target={'_blank'}>
              <TiSocialLinkedin className={'hvr-icon'}/><span className={'sr-only'}>LinkedIn Profile</span></a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
