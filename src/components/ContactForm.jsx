import React, {Component} from 'react';

import '../styles/contact-form.css';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.msgRef = React.createRef();
  }

  render() {
    return (
      <form className={'contactForm'}>
        <label>
          <span>Name</span>
          <input type={'text'} name={'contact_name'} ref={this.nameRef} />
        </label>
        <label>
          <span>Email Address</span>
          <input type={'email'} name={'email'} ref={this.emailRef} />
        </label>
        <label>
          <span>Message</span>
          <textarea ref={this.msgRef} />
        </label>
      </form>
    )
  }
}