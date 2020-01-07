import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "../styles/header.css";

export default class GalleryHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h1><Link to={'/'}>Jay Billings</Link></h1>
        <nav>
          <ul>
            <li>&lt; Prev Project</li>
            <li>Next Project &gt;</li>
          </ul>
        </nav>
      </header>
    );
  }
}