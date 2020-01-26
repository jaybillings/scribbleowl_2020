import React, {Component} from 'react';

import Header from '../components/Header';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';
import Footer from "../components/common/Footer";

import mainConfig from '../content/main.json';
import galleryConfig from "../content/gallery.json";
import aboutConfig from "../content/about.json";
import contactConfig from "../content/contact.json";

import 'normalize.css/normalize.css';
import '../styles/index.css';

export default class SinglePageLayout extends Component {
  render() {
    const contactCopy = mainConfig.forHire ? contactConfig.hireCopy : contactConfig.copy;

    return [
      <Header key={'header'} title={mainConfig.title} navSections={mainConfig.navSections} />,
      <About key={'about'} title={aboutConfig.title} copy={aboutConfig.copy} skillsSection={aboutConfig.skillsSection} />,
      <Portfolio key={'portfolio'} title={galleryConfig.title} projects={galleryConfig.projects} projectList={galleryConfig.projectOrder} />,
      <Contact key={'contact'} title={contactConfig.title} copy={contactCopy} />,
      <Footer key={'footer'} />
    ];
  }
}