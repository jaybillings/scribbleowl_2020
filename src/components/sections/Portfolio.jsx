import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {renderCopy} from "../../js/utilities";
import {TiArrowRightThick, TiArrowForwardOutline} from "react-icons/ti";

import ScrollTop from "../common/ScrollTop";

import "../../styles/scss/section-portfolio.scss";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {currentProj: this.props.projectList[0]};

    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleNavKeyDown = this.handleNavKeyDown.bind(this);
    this.renderPortfolioNav = this.renderPortfolioNav.bind(this);
    this.renderPortfolioTile = this.renderPortfolioTile.bind(this);
  }

  handleNavClick(e) {
    const alias = e.currentTarget.dataset.alias || '';
    if (alias !== this.state.currentProj) this.setState({currentProj: alias});
  }

  handleNavKeyDown(e) {
    if (e.keyCode === 13) this.handleNavClick(e);
  }

  renderPortfolioNav() {
    return (
      <nav>
        <ul>
          {this.props.projectList.map(alias =>
            <li key={alias} tabIndex={0} data-alias={alias}
                className={alias === this.state.currentProj ? 'selected' : 'text-grow-out'}
                onClick={this.handleNavClick}
                onKeyDown={this.handleNavKeyDown}>
              <span>{this.props.projects[alias].title}</span>
            </li>
          )}
        </ul>
      </nav>
    )
  }

  renderPortfolioTile(project) {
    const liveLink = project.uri ?
      <span>[ <a href={project.uri}>Live version <TiArrowForwardOutline aria-hidden={true} /></a> ]</span> : '';
    const sourceLink = project.source ?
      <span>[ <a href={project.source}>Source <TiArrowForwardOutline aria-hidden={true} /></a> ]</span> : '';
    const links = project.uri || project.source ? <p className={'external-links'}>{liveLink} {sourceLink}</p> : '';

    return (
      <div className={'projectTile'}>
        <h3>{project.title} ({project.year})</h3>
        <p className={'tech'}><strong>{project.tech.join(', ')}</strong></p>
        {links}
        <div className={'copy'}>{renderCopy(project.copy, 'projtile')}</div>
        <p className={'gallery-link hvr-icon-wobble-horizontal'}>
          [ <Link to={`/gallery/${this.state.currentProj}#top`}>
          Open full gallery <TiArrowRightThick className={'hvr-icon'} aria-hidden={true} /></Link> ]
        </p>
      </div>
    )
  }

  render() {
    const currentProject = this.props.projects[this.state.currentProj];
    const tileStyle = {background: `url(${currentProject.thumbnail})`};

    return (
      <div id={'portfolio-section'} className={'portfolio'}>
        <div style={tileStyle}>
          <div className={'portfolioInner'}>
            <h2><Link id={'portfolio'} to={'#portfolio'} className={'sr-only show-on-focus'}>#</Link> {this.props.title}</h2>
            {this.renderPortfolioNav()}
            {this.renderPortfolioTile(currentProject)}
            <ScrollTop/>
          </div>
        </div>
      </div>
    )
  }
}