import React, {Component} from 'react';
import {Link} from "react-router-dom";

import PortfolioNav from "../portfolio/PortfolioNav";
import PortfolioTile from "../portfolio/PortfolioTile";
import ScrollTop from "../common/ScrollTop";

import "../../styles/scss/section-portfolio.scss";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {currentAlias: this.props.projectList[0]};

    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleNavKeyDown = this.handleNavKeyDown.bind(this);
  }

  handleNavClick(e) {
    const alias = e.currentTarget.dataset.alias || '';
    if (alias !== this.state.currentAlias) this.setState({currentAlias: alias});
  }

  handleNavKeyDown(e) {
    if (e.keyCode === 13) this.handleNavClick(e);
  }

  render() {
    const projectNames = this.props.projectList.map(alias => [alias, this.props.projects[alias].title]);
    const currentProject = this.props.projects[this.state.currentAlias];
    const imgSrc = process.env.REACT_APP_LOCAL_IMAGES ? `/img/${this.state.currentAlias}/${currentProject.thumbnail}` : currentProject.thumbnail;

    return (
      <div id={'portfolio-section'} className={'portfolio'}>
        <div style={{background: `url(${imgSrc})`}}>
          <div className={'portfolioInner'}>
            <h2><Link id={'portfolio'} to={'#portfolio'} className={'sr-only show-on-focus'}>#</Link> {this.props.title}</h2>
            <PortfolioNav projAlias={this.state.currentAlias} projectNames={projectNames} handleNavClick={this.handleNavClick} handleNavKeyDown={this.handleNavKeyDown} />
            <PortfolioTile alias={this.state.currentAlias} project={currentProject} />
            <ScrollTop/>
          </div>
        </div>
      </div>
    )
  }
}