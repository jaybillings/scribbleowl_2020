import React, { Component } from 'react';
import { TiMail } from "react-icons/ti";
import { postData } from "../js/utilities";

import '../styles/scss/contact-form.scss';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {submitStatus: null, errorMsg: ''}; // null = unsent, 1 = sent, 0 = error

    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.msgRef = React.createRef();
    this.honeyRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.renderSendStatus = this.renderSendStatus.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    document.getElementById(this.props.anchorID).focus();

    // Honeypot caught -- post vague error
    if (this.honeyRef.current.value.length) {
      this.setState({
        submitStatus: 0,
        errorMsg: 'If you are using autocomplete, try disabling it.'
      });
     /* return;*/
    }

    const formData = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      message: this.msgRef.current.value
    };
    const url = './contact-form.php';

    postData(url, formData).then(data => {
      this.setState({errorMsg: data.reason ?? '', submitStatus: data.status ?? 0});
      this.resetForm();
    }).catch(err => {
      console.error(err);
      this.setState({submitStatus: 0, errorMsg: err.message});
    });
  }

  resetForm() {
    const form = document.querySelector('.contact-form');
    form.reset();
    form.blur();
  }

  renderSendStatus() {
    if (this.state.submitStatus) return <span className={'success'}>Thank you for your message. I will get back to you as soon as I can.</span>;
    if (this.state.submitStatus !== null) return <span
      className={'failure'}>Message could not be sent. {this.state.errorMsg}</span>;

    return '';
  }

  render() {
    return (
      [
        <div key={'contactMsg'} className={'formMsg'}>{this.renderSendStatus()}</div>,
        <form key={'contact-form'} className={'contact-form'} onSubmit={this.handleSubmit}>
          <label className={'form-name'}>
            <span>your name</span>
            <input type={'text'} name={'contact_name_jckb'} className={'generic-linear-transition'} ref={this.nameRef}
                   autoComplete={'name'} required />
          </label>
          <label className={'form-address'}>
            <span>your email address</span>
            <input type={'email'} name={'email_jckb'} className={'generic-linear-transition'} ref={this.emailRef}
                   autoComplete={'email'} required />
          </label>
          <label className={'form-msg'}>
            <span>a brief message</span>
            <textarea name={'message_jckb'} className={'generic-linear-transition'} ref={this.msgRef} required />
          </label>
          {/* Honeypot field */}
          <label className={'jckb-field'}>
            <span>your address</span>
            <input type={'text'} name={'address'} tabIndex={-1} autoComplete={'off'} ref={this.honeyRef} />
          </label>
          <button type={'submit'} className={'form-button hvr-pulse-grow hvr-fade'}>Send Message <TiMail aria-hidden={true} />
          </button>
        </form>
      ]
    )
  }
}