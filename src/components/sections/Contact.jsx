import React from 'react'
import {renderCopy} from "../../js/utilities"

import ContactForm from "../ContactForm"
import ScrollTop from "../common/ScrollTop"

export default function Contact(props) {
    return (
      <div id={'contact'} className={'contact section'}>
        <h2>{props.title}</h2>
        {renderCopy(props.copy)}
        <p>All fields are required.</p>
        <ContactForm/>
        <ScrollTop/>
      </div>
    )
}
