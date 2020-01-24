import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {renderCopy} from "../../js/utilities";

import ScrollTop from "../common/ScrollTop";

import pageContent from '../../content/gallery.json';

import "../../styles/section-portfolio.css";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.title = pageContent.title;
    this.projects = pageContent.projects;
    this.projectList = pageContent.projectOrder;

    this.state = {currentProj: this.projectList[0]};

    this.handleNavClick = this.handleNavClick.bind(this);
    this.renderPortfolioNav = this.renderPortfolioNav.bind(this);
    this.renderPortfolioTile = this.renderPortfolioTile.bind(this);
  }

  handleNavClick(e) {
    const alias = e.currentTarget.dataset.alias || '';
    if (alias !== this.state.currentProj) this.setState({currentProj: alias});
  }

  renderPortfolioNav() {
    return (
      <nav>
        <ul>
          {this.projectList.map(alias =>
            <li key={alias}
                data-alias={alias}
                className={alias === this.state.currentProj ? 'selected' : ''}
                onClick={this.handleNavClick}>
              <span>{this.projects[alias].title}</span>
            </li>
          )}
        </ul>
      </nav>
    )
  }

  renderPortfolioTile(project) {
    return (
      <div className={'projectTile'}>
        <h3>{project.title} ({project.year})</h3>
        <p><strong>{project.tech.join(', ')}</strong></p>
        <div className={'copy'}>{renderCopy(project.copy, 'projtile')}</div>
        <Link to={`/gallery/${this.state.currentProj}`}>Open full gallery -></Link>
      </div>
    )
  }

  render() {
    const currentProject = this.projects[this.state.currentProj];
    const tileStyle = {background: `url(${currentProject.thumbnail})`};

    return ([
      <div key={'portfolio'} id={'portfolio'}>
        <div style={tileStyle}>
          <div className={'portfolioInner'}>
            <h2>{this.title}</h2>
            {this.renderPortfolioNav()}
            {this.renderPortfolioTile(currentProject)}
          </div>
        </div>
        <ScrollTop/>
      </div>
    ])
  }
}