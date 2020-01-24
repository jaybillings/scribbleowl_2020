import React, {Component} from 'react';
import {renderCopy} from "../../js/utilities";
import Loading from "../Loading";
import ContactForm from "../ContactForm";
import ScrollTop from "../common/ScrollTop";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', copy: []};
  }

  componentDidMount() {
    this.props.fetchConfig('contact').then(result => {
      if (this.props.forHire) this.setState({title: result.data.forHire.title, copy: result.data.forHire.copy});
      else this.setState({title: result.data.default.title, copy: result.data.default.copy});
    }).catch(err => console.error(err));
  }

  render() {
    if (!this.state.title) return <Loading />;

    return (
      <div id={'contact'} className={'contact section'}>
        <h2>{this.state.title}</h2>
        {renderCopy(this.state.copy)}
        <ContactForm/>
        <ScrollTop/>
      </div>
    )
  }
}