import React, {Component} from 'react';

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', copy: [], skills: []};
  }

  componentDidMount() {
    this.props.fetchConfig('skills').then(result => {
      this.setState({title: result.data.title, copy: result.data.copy, skills: result.data.skills});
    }).catch(err => {
      console.error('err');
    });
  }

  render() {
    return(
      <div className={'section'}>
        <h2>{this.state.title}</h2>
        {this.state.copy.map((line, iter) => <p key={iter}>{line}</p>)}
        {
          this.state.skills.map(subsection =>
            <div key={subsection.title}>
              <h3>{subsection.title}</h3>
              <p>{subsection.desc}</p>
              <ul>{subsection.items.map((item, iter) => <li key={iter}>{item}</li>)}</ul>
            </div>
          )
        }
      </div>
    )
  }
}