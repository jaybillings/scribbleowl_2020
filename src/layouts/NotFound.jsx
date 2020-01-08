import React from "react";
import {Link} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound(props) {
  return [
    <Header/>,
    <div className={'section'}><h2>Sorry, that page could not be found. <Link to={'/'}>Return home.</Link></h2></div>,
    <Footer/>
  ]
}