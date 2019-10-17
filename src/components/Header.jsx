import React, {Component} from 'react';

import '../styles/header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', sections: []};

    this.contactRef = React.createRef();

    this.renderSections = this.renderSections.bind(this);
  }

  componentDidMount() {
    this.props.fetchConfig('header').then(result => {
      this.setState({title: result.data.title, sections: result.data.sections});
    }).catch(err => {console.error(err)});
  }

  renderSections() {
    if (!this.state.sections.default) return [];

    const altSection = this.props.forHire ? this.state.sections.for_hire : this.state.sections.contact;
    let sections = this.state.sections.default.map(section => <li key={section[1]}><a href={`#${section[1]}`} title={`Scroll to ${section[0]} section`}>{section[0]}</a></li>);

    sections.push(<li key={altSection[1]}><a href={`#${altSection[1]}`} title={`Scroll to ${altSection[0]} section`}>{altSection[0]}</a></li>);

    return sections;
  }

  render() {
    return (
      <header>
        <h1>{this.state.title}</h1>
        <nav>
          <ul>{this.renderSections()}</ul>
        </nav>
      </header>
    );
  }
}