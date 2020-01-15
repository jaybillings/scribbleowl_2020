import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {NavHashLink as NavLink} from "react-router-hash-link";

import '../../styles/header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.defaultSections = [
      ["About", "about"],
      ["Skills Summary", "skills"],
      ["Past Projects", "portfolio"]
    ];
    this.contactSection = ["Contact Me", "contact"];
    this.hireSection = ["Hire Me", "hire"];

    this.renderSections = this.renderSections.bind(this);
  }

  renderSections() {
    const sections = this.defaultSections.concat(this.props.forHire ? [this.hireSection] : [this.contactSection]);

    return sections.map(section =>
      <li key={section[1]}><NavLink to={`/#${section[1]}`} isActive={(match, location) => {
        if (!match) return false;
        return location.hash === `#${section[1]}`;
      }} activeClassName={'current'}>{section[0]}</NavLink></li>);
  }

  render() {
    return (
      <header>
        <h1><Link to={'/'}>Jay Billings</Link></h1>
        <nav>
          <ul>{this.renderSections()}</ul>
        </nav>
      </header>
    );
  }
}