import React, {Component} from 'react';

import '../styles/section.css';

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', copy: []};
  }

  componentDidMount() {
    this.props.fetchConfig('about').then(result => {
      this.setState(
        {title: result.data.title, copy: result.data.copy});
    }).catch(err => {
      console.error('err');
    });
  }

  render() {
    return (
      <div className={'section'}>
        <h2>{this.state.title}</h2>
        {this.state.copy.map((line, iter) => <p key={iter}>{line}</p>)}
      </div>
    )
  }
}