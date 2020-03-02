import React, { Component } from 'react';

import Header from '../components/Header';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';
import Footer from "../components/common/Footer";

import mainConfig from '../content/main.json';
import galleryConfig from "../content/gallery.json";
import aboutConfig from "../content/about.json";
import contactConfig from "../content/contact.json";

export default class SinglePageLayout extends Component {
  constructor(props) {
    super(props);

    this.headerRef = React.createRef();
  }

  componentDidMount() {
    this.headerRef.current.scrollIntoView();
  }

  render() {
    return [
      <Header key={'header'} ref={this.headerRef} title={mainConfig.title} navSections={mainConfig.navSections} gitHubURI={mainConfig.github}
              linkedInURI={mainConfig.linkedin} />,
      <About key={'about'} title={aboutConfig.title} copy={aboutConfig.copy} skillsSection={aboutConfig.skillsSection}
             cta={aboutConfig.cta} />,
      <Portfolio key={'portfolio'} title={galleryConfig.title} projects={galleryConfig.projects}
                 projectList={galleryConfig.projectOrder} />,
      <Contact key={'contact'} title={contactConfig.title} forHire={mainConfig.forHire}
               forHireCTA={contactConfig.cta.forHire} noHireCTA={contactConfig.cta.noHire} />,
      <Footer key={'footer'} siteURI={mainConfig.siteSource} />
    ];
  }
}