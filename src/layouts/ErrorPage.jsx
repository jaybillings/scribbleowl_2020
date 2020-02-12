import React from "react";
import {Link} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/common/Footer";

export default function ErrorPage(props) {
  const title = props.title ?? 'Jay Billings';
  const navSections = props.navSections ?? [];

  return [
    <Header key={'header'} title={title} navSections={navSections} />,
    <div key='content' className={'section'}>
      <h2>Oops, something went wrong.</h2>
      <p>Sorry about that. <Link to={'/'}>Return home.</Link></p>
    </div>,
    <Footer key={'footer'} />
  ]
}
