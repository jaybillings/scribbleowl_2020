import React, {Component} from 'react';
import {renderCopy} from "../js/utilities";

import ScrollTop from "./ScrollTop";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', copy: []};
  }

  componentDidMount() {
    this.props.fetchConfig('about').then(result => {
      this.setState({title: result.data.title, copy: result.data.copy});
    }).catch(err => console.error('err'));
  }

  render() {
    if (!this.state.title) return <p className={'loading'}>Loading...</p>;

    return (
      <div id={'about'} className={'section'}>
        <h2>{this.state.title}</h2>
        {renderCopy(this.state.copy)}
        <ScrollTop/>
      </div>
    )
  }
}