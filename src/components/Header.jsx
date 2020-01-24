import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {NavHashLink as NavLink} from "react-router-hash-link";

import '../styles/header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1><Link to={'/'}>{this.props.title}</Link></h1>
        <nav>
          <ul>{this.props.navSections.map(section =>
            <li key={section.path}><NavLink to={`/#${section.path}`} isActive={(match, location) => {
              if (!match) return false;
              return location.hash === `#${section.path}`;
            }} activeClassName={'current'}>{section.title}</NavLink></li>)}</ul>
        </nav>
      </header>
    );
  }
}
