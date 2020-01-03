import React, {Component} from 'react';
import ContactForm from "./ContactForm";
import ScrollTop from "./ScrollTop";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', copy: []};
  }

  componentDidMount() {
    this.props.fetchConfig('contact').then(result => {
      if (this.props.forHire) this.setState({title: result.data.forHire.title, copy: result.data.forHire.copy});
      else this.setState({title: result.data.title, copy: result.data.copy});
    }).catch(err => console.error(err));
  }

  render() {
    return ([
      <div id={'contact'} className={'section'}>
        <h2>{this.state.title}</h2>
        <p>{this.state.copy}</p>
        <ContactForm/>
        <ScrollTop/>
      </div>
    ])
  }
}