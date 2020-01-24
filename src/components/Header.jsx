import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {NavHashLink as NavLink} from "react-router-hash-link";

import navSections from '../content/sections.json';

import '../styles/header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1><Link to={'/'}>Jay Billings</Link></h1>
        <nav>
          <ul>{navSections.map(section =>
            <li key={section.path}><NavLink to={`/#${section.path}`} isActive={(match, location) => {
              if (!match) return false;
              return location.hash === `#${section.path}`;
            }} activeClassName={'current'}>{section.title}</NavLink></li>)}</ul>
        </nav>
      </header>
    );
  }
}