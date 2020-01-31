import React, {Component} from 'react';
import {NavHashLink as NavLink} from "react-router-hash-link";

import '../styles/header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <nav>
          <ul>{this.props.navSections.map((section, idx) =>
            <li key={section.path} className={`hvr-fade hvr-grow-rotate${idx % 2 !== 0 ? ' alt' : ''}`}>
              <NavLink to={`/${section.path}`} isActive={(match, location) => {
                if (!match) return false;
                return location.hash === `#${section.path}`;
              }} activeClassName={'current'}>{section.title}
              </NavLink>
            </li>)}
          </ul>
        </nav>
      </header>
    );
  }
}
