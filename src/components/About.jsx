import React, {Component} from 'react';

import '../styles/section.css';

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', copy: [], skills: []};
  }

  componentDidMount() {
    this.props.fetchConfig('about').then(result => {
      this.setState(
        {title: result.data.title, copy: result.data.copy, skills: result.data.skills});
    }).catch(err => {
      console.error('err');
    });
  }

  render() {
    return (
      <div className={'section'}>
        <h2>{this.state.title}</h2>
        {this.state.copy.map(line => <p>{line}</p>)}
        <h3>Skills Summary</h3>
        {
          this.state.skills.map(subsection =>
            <div>
              <h4>{subsection.title}</h4>
              <p>{subsection.desc}</p>
              <ul></ul>
            </div>
          )
        }
      </div>
    );
  }
}