import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {renderCopy} from "../js/utilities";

import ScrollTop from "./ScrollTop";
import Loading from "./Loading";

import "../styles/section-portfolio.css";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {title: 'Project Gallery', currentProj: '', projectList: [], projects: {}};

    this.handleNavClick = this.handleNavClick.bind(this);
    this.renderPortfolioNav = this.renderPortfolioNav.bind(this);
    this.renderPortfolioTile = this.renderPortfolioTile.bind(this);
  }

  componentDidMount() {
    this.props.fetchConfig('gallery').then(result => {
      this.setState({
        currentProj: result.data.projectOrder[0],
        projectList: result.data.projectOrder,
        projects: result.data.projects
      });
    }).catch(err => console.error(err));
  }

  handleNavClick(e) {
    const alias = e.target.dataset.alias || '';
    if (alias !== this.state.currentProj) this.setState({currentProj: alias});
  }

  renderPortfolioNav() {
    return (
        <ul>
          {this.state.projectList.map(alias =>
            <li key={alias}
                data-alias={alias}
                className={alias === this.state.currentProj ? 'selected' : ''}
                onClick={this.handleNavClick}>
              <span>{this.state.projects[alias].title}</span>
            </li>
          )}
        </ul>
    )
  }

  renderPortfolioTile(project) {
    return (
      <div className={'projectTile'}>
        <h3>{project.title} ({project.year})</h3>
        <p><strong>{project.tech.join(', ')}</strong></p>
        {renderCopy(project.copy)}
        <Link to={`/gallery/${this.state.currentProj}`}>Open full gallery -></Link>
      </div>
    )
  }

  render() {
    if (!this.state.projectList.length) return <Loading />;

    const project = this.state.projects[this.state.currentProj];
    const styles = {background: `url(${project.thumbnail})`};

    return ([
      <div id={'portfolio'}>
        <div style={styles}>
          <div className={'navContainer'}>
            <h2>{this.state.title}</h2>
            <nav>{this.renderPortfolioNav()}</nav>
            <div>{this.renderPortfolioTile(project)}</div>
          </div>
        </div>
        <ScrollTop/>
      </div>
    ])
  }
}