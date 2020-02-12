import React from "react";
import {Link} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/common/Footer";

export default function NotFoundPage(props) {
  const title = props.title ?? 'Jay Billings';
  const navSections = props.navSections ?? [];

  return [
    <Header key={'header'} title={title} navSections={navSections} />,
    <div key={'content'} className={'section'}><h2>Sorry, that page could not be found. <Link to={'/'}>Return home.</Link></h2></div>,
    <Footer key={'footer'} />
  ]
}