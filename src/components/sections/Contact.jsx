import React, {Component} from 'react';
import {renderCopy} from "../../js/utilities";

import ContactForm from "../ContactForm";
import ScrollTop from "../common/ScrollTop";

import pageContent from '../../content/contact.json';

export default class Contact extends Component {
  render() {
    this.title = pageContent.title;
    this.copy = pageContent.forHire ? pageContent.hireCopy : pageContent.copy;

    return (
      <div id={'contact'} className={'contact section'}>
        <h2>{this.title}</h2>
        {renderCopy(this.copy)}
        <ContactForm/>
        <ScrollTop/>
      </div>
    )
  }
}