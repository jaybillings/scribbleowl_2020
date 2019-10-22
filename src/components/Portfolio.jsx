import React, {Component} from 'react';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', copy: [], projects: []};

    this.renderPortfolioTile = this.renderPortfolioTile.bind(this);
  }

  componentDidMount() {
    this.props.fetchConfig('portfolio').then(result => {
      this.setState({title: result.data.title, copy: result.data.copy, projects: result.data.projects});
    }).catch(err => {
      console.error(err);
    });
  }

  renderPortfolioTile(project) {
    return(
      <div className={'tileItem'} key={project.title}>
        <div className={'sidebar'}>
          <h3>{project.title},{project.year}</h3>
          <strong>{project.tech.toString()}</strong>
          {project.desc.map((line, iter) => <p key={iter}>{line}</p>)}
          {project.images[0].desc.map((line, iter) => <p className={'imgCopy'} key={iter}>{line}</p>)}
        </div>
        <img alt={''} src={project.images[0].path} />
      </div>
    )
  }

  render() {
    return (
      <div id={'portfolio'} className={'section'}>
        <h2>{this.state.title}</h2>
        {this.state.copy.map((line, iter) => <p key={iter}>{line}</p>)}
        <div className={'tiles'}>
          {this.state.projects.map(item => this.renderPortfolioTile(item))}
        </div>
      </div>
    )
  }
}