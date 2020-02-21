import React from 'react'
import {Link} from "react-router-dom"

import ContactForm from "../ContactForm"
import ScrollTop from "../common/ScrollTop"
import ReactMarkdown from "react-markdown"

export default function Contact(props) {
  const cta = props.forHire ? props.forHireCTA : props.noHireCTA;
  const anchorID = 'contact';

  return (
    <div id={'contact-section'} className={'contact section'}>
      <h2><Link id={anchorID} to={'#contact'} className={'sr-only show-on-focus'}>#</Link> {props.title}</h2>
      <ReactMarkdown source={cta} />
      <p className={'important'}>* All fields are required.</p>
      <ContactForm anchorID={anchorID} />
      <ScrollTop/>
    </div>
  )
}
