import React, {Component} from 'react';

import Header from '../components/Header';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';
import Footer from "../components/common/Footer";

import 'normalize.css/normalize.css';
import '../styles/index.css';

export default class SinglePageLayout extends Component {
  render() {
    return [
      <Header key={'header'} />,
      <About key={'about'} />,
      <Portfolio key={'portfolio'} />,
      <Contact key={'contact'} />,
      <Footer key={'footer'} />
    ];
  }
}