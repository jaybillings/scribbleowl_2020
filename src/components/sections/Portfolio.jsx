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
          {this.props.projectList.map(alias =>
            <li key={alias}
                data-alias={alias}
                className={alias === this.state.currentProj ? 'selected' : 'hvr-grow'}
                onClick={this.handleNavClick}>
              <span className={''}>{this.props.projects[alias].title}</span>
            </li>
          )}
        </ul>
      </nav>
    )
  }

  renderPortfolioTile(project) {
    const liveLink = project.uri ?
      <span>[ <a href={project.uri}>Live version <TiArrowForwardOutline/></a> ]</span> : '';
    const sourceLink = project.source ?
      <span>[ <a href={project.source}>Source <TiArrowForwardOutline/></a> ]</span> : '';
    const links = project.uri || project.source ? <p>{liveLink} {sourceLink}</p> : '';

    return (
      <div className={'projectTile'}>
        <h3>{project.title} ({project.year})</h3>
        <p className={'tech'}><strong>{project.tech.join(', ')}</strong></p>
        {links}
        <div className={'copy'}>{renderCopy(project.copy, 'projtile')}</div>
        {/* Yes, the spaces are significant */}
        <p className={'gallery-link'}>
          [ <Link to={`/gallery/${this.state.currentProj}#top`}>
          Open full gallery <TiArrowRightThick /></Link> ]
        </p>
      </div>
    )
  }

  render() {
    const currentProject = this.props.projects[this.state.currentProj];
    const tileStyle = {background: `gray url(${currentProject.thumbnail})`};

    return ([
      <div key={'portfolio'} id={'portfolio'}>
        <div style={tileStyle}>
          <div className={'portfolioInner'}>
            <h2>{this.props.title}</h2>
            {this.renderPortfolioNav()}
            {this.renderPortfolioTile(currentProject)}
          </div>
          <ScrollTop/>
        </div>
      </div>,
    ])
  }
}