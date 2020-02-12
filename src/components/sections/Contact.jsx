import React from 'react'
import {renderCopy} from "../../js/utilities"

import ContactForm from "../ContactForm"
import ScrollTop from "../common/ScrollTop"
import {Link} from "react-router-dom";

export default function Contact(props) {
  return (
    <div id={'contact-section'} className={'contact section'}>
      <h2><Link id={'contact'} to={'#contact'} className={'sr-only show-on-focus'}>#</Link> {props.title}</h2>
      {renderCopy(props.copy)}
      <p>All fields are required.</p>
      <ContactForm/>
      <ScrollTop/>
    </div>
  )
}
