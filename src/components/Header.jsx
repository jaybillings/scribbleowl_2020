import React, {Component} from 'react';
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
          </ul>
        </nav>
      </header >
    );
  }
}
