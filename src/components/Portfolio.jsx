import React, {Component} from 'react';

import "../styles/section-portfolio.css";
import Gallery from "./Gallery";
import ScrollTop from "./ScrollTop";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {title: '', projects: [], currentIndex: 0, galleryOpen: false};

    this.galleryRef = React.createRef();

    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleGalleryClick = this.handleGalleryClick.bind(this);

    this.renderPortfolioTile = this.renderPortfolioTile.bind(this);
    this.renderTileImage = this.renderTileImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchConfig('portfolio').then(result => {
      this.setState({title: result.data.title, projects: result.data.projects});
      console.log(result.data.projects);
    }).catch(err => {
      console.error(err);
    });
  }

  handleNavClick(e) {
    const index = parseInt(e.target.dataset.index) || 0;
    if (index !== this.state.currentIndex) this.setState({currentIndex: index});
  }

  handleGalleryClick() {
    this.setState(prevState => ({galleryOpen: !prevState.galleryOpen}));
  }

  renderPortfolioTile(project) {
    const buttonText = this.state.galleryOpen ? 'Close gallery <-' : 'Open gallery ->';

    return (
      <div className={'projectTile'}>
        <h3>{project.title} ({project.year})</h3>
        <p><strong>{project.tech.join(', ')}</strong></p>
        {project.desc.map((line, iter) => <p key={iter}>{line}</p>)}
        <button type={'button'} className={'fakeLink'} onClick={this.handleGalleryClick}>{buttonText}</button>
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

    const project = this.state.projects[this.state.currentIndex];
    const styles = {background: `url(${project.images[0].path})`};

    return ([
      <div id={'portfolio'}>
        <div style={styles}>
          <div className={'portfolioNav section'}>
            <h2>{this.state.title}</h2>
            <nav>
              <ul>{this.state.projects.map((item, iter) =>
                <li key={iter}
                    className={iter === this.state.currentIndex ? 'selected' : ''}
                    data-index={`portfolio-nav-item-${iter}`}
                    onClick={this.handleNavClick}>{item.title}</li>)}
              </ul>
            </nav>
            <div>{this.renderPortfolioTile(project)}</div>
          </div>
        </div>
        <div className={this.state.galleryOpen ? 'visible' : 'hidden'}><Gallery cards={project.images}/></div>
        <ScrollTop/>
      </div>
    ])
  }
}