import React, {Component} from 'react';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', copy: [], projects: []};

    this.renderGalleryItem = this.renderGalleryItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchConfig('portfolio').then(result => {
      this.setState({title: result.data.title, copy: result.data.copy, projects: result.data.projects});
    }).catch(err => {
      console.error(err);
    });
  }

  renderGalleryItem(item) {
    return(
      <div className={'galItem'} key={item.title}>
        <h3>{item.title}</h3>
        {item.desc.map((line, iter) => <p key={iter}>{line}</p>)}
        <strong>Technologies used:</strong> <span>{item.tech.toString()}</span>
        <ul>{item.images.map((image, iter) => <li key={iter}><img alt={''} src={image[0]} /><p>{image[1]}</p></li>)}</ul>
      </div>
    )
  }

  render() {
    return (
      <div className={'section'}>
        <h2>{this.state.title}</h2>
        {this.state.copy.map((line, iter) => <p key={iter}>{line}</p>)}
        <nav>
          <strong>Filter by technology:</strong>
          <ul>
            <li key={'node'}>NodeJS</li>
            <li key={'python'}>Python</li>
            <li key={'php'}>PHP</li>
            <li key={'dotnet'}>.NET</li>
          </ul>
        </nav>
        <div className={'gallery'}>
          {this.state.projects.map(item => this.renderGalleryItem(item))}
        </div>
      </div>
    )
  }
}