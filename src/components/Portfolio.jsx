import React, {Component} from 'react';
import {renderCopy} from "../js/utilities";
import {Link} from "react-router-dom";

import ScrollTop from "./ScrollTop";

import "../styles/section-portfolio.css";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', projects: [], currentIndex: 0};

    this.handleNavClick = this.handleNavClick.bind(this);
    this.renderPortfolioTile = this.renderPortfolioTile.bind(this);
  }

  componentDidMount() {
    this.props.fetchConfig('portfolio').then(result => {
      this.setState({title: result.data.title, projects: result.data.projects});
    }).catch(err => console.error(err));
  }

  handleNavClick(e) {
    const index = parseInt(e.target.dataset.index) || 0;
    if (index !== this.state.currentIndex) this.setState({currentIndex: index});
  }

  renderPortfolioTile(project) {
    return (
      <div className={'projectTile'}>
        <h3>{project.title} ({project.year})</h3>
        <p><strong>{project.tech.join(', ')}</strong></p>
        {renderCopy(project.desc)}
        <Link to={'/gallery/' + this.state.currentIndex}>Open full gallery -></Link>
      </div>
    )
  }

  render() {
    if (!this.state.title) return <p>Loading...</p>;

    const project = this.state.projects[this.state.currentIndex];
    const styles = {background: `url(${project.thumbnail})`};

    return ([
      <div id={'portfolio'}>
        <div style={styles}>
          <div className={'portfolioNav section'}>
            <h2>{this.state.title}</h2>
            <nav>
              <ul>{this.state.projects.map((item, iter) =>
                <li key={`portfolio-nav-item-${iter}`}
                    className={iter === this.state.currentIndex ? 'selected' : ''}
                    data-index={iter}
                    onClick={this.handleNavClick}>{item.title}</li>)}
              </ul>
            </nav>
            <div>{this.renderPortfolioTile(project)}</div>
          </div>
        </div>
        <ScrollTop/>
      </div>
    ])
  }
}