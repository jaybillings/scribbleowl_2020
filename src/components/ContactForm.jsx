import React, {Component} from 'react';
import {TiMail} from "react-icons/ti";

import '../styles/scss/contact-form.scss';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {submitStatus: null}; // null = unsent, 1 = sent, 0 = error

    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.msgRef = React.createRef();

    //this.mailerService = app.service('send-mail');

    this.sendMessage = this.sendMessage.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.renderSendStatus = this.renderSendStatus.bind(this);
  }

  sendMessage(e) {
    e.preventDefault();

    const email = {
      from: this.emailRef.current.value,
      subject: `Form Submission From ${this.nameRef.current.value}`,
      body: this.msgRef.current.value
    };

    console.info(email);

    this.clearForm();
    this.setState({submitStatus: 1});

    /*this.mailerService.create(email).then(result => {
      this.clearForm();
      this.setState({submitStatus: 1});
    }).catch(err => {
      console.error(err);
      this.setState({submitStatus: 0});
    });*/
  }

  clearForm() {
    this.nameRef.current.value = '';
    this.emailRef.current.value = '';
    this.msgRef.current.value = '';
  }

  renderSendStatus() {
    if (this.state.submitStatus) return 'Message sent. Thank you for your message.';
    if (this.state.submitStatus !== null) return 'Message could not be sent. Please try again.';

    return '';
  }

  render() {
    return (
      [
        <div key={'contactMsg'} className={'formMsg'}>{this.renderSendStatus()}</div>,
        <form key={'contactForm'} className={'contactForm'} onSubmit={this.sendMessage}>
          <label>
            <span>Name</span>
            <input type={'text'} name={'contact_name'} className={'generic-linear-transition'} ref={this.nameRef}/>
          </label>
          <label>
            <span>Email Address</span>
            <input type={'email'} name={'email'} className={'generic-linear-transition'} ref={this.emailRef}/>
          </label>
          <label>
            <span>Message</span>
            <textarea className={'generic-linear-transition'} ref={this.msgRef}/>
          </label>
          <button type={'submit'} className={'hvr-pulse-grow hvr-fade '}>Send Message <TiMail/></button>
        </form>
      ]
    )
  }
}