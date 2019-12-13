import React, {Component} from 'react';

import "../styles/section-portfolio.css";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', projects: []};

    this.renderPortfolioTile = this.renderPortfolioTile.bind(this);
    this.renderTileImage = this.renderTileImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchConfig('portfolio').then(result => {
      this.setState({title: result.data.title, projects: result.data.projects});
    }).catch(err => {
      console.error(err);
    });
  }

  renderPortfolioTile(project) {
    console.info(project);
    return (
      <div>
        <h3>{project.title} ({project.year})</h3>
        <p><strong>{project.tech.join(', ')}</strong></p>
        {project.desc.map((line, iter) => <p key={iter}>{line}</p>)}
        <p>Open gallery -></p>
      </div>
    )
  }

  renderTileImage(key, imageInfo) {
    /*return (
      <div key={key} className={'tileImageItem'}>
        <img alt={''} src={imageInfo.path}/>
        {imageInfo.desc.map((line, iter) => <p key={iter} className={'imgCopy'}>{line}</p>)}
      </div>
    )*/
  }

  render() {
    if (!this.state.projects[0]) return <p>Loading...</p>;

    const project = this.state.projects[0];
    const styles = {background: `url(${project.images[0].path})`};

    return (
      <div style={styles}>
        <div id={'portfolio'} className={'section'}>
          <h2>{this.state.title}</h2>
          <nav><ul>{this.state.projects.map((item, iter) => <li key={iter}>{item.title}</li>)}</ul></nav>
          <div className={'projectTile'}>{this.renderPortfolioTile(project)}</div>
        </div>
      </div>
    )
  }
}