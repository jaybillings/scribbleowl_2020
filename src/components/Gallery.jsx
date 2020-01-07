import React, {Component} from "react";

import "../styles/gallery.css";

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {cardIndex: 0};

    this.handleCardChange = this.handleCardChange.bind(this);
    this.handleImgClick = this.handleImgClick.bind(this);

    this.renderCard = this.renderCard.bind(this);
    this.renderPrevCard = this.renderPrevCard.bind(this);
    this.renderNextCard = this.renderNextCard.bind(this);
  }

  handleCardChange(e) {
    this.setState({cardIndex: parseInt(e.target.dataset.index)});
  }

  handleImgClick(e) {
    window.open(e.target.src);
  }

  renderCard() {
    const cardInfo = this.props.cards[this.state.cardIndex];

    return (
      <div className={'card full'}>
        <img alt={''} src={cardInfo.path} onClick={this.handleImgClick}/>
        <div>{this.props.renderCopy(cardInfo.desc)}</div>
      </div>
    )
  }

  renderPrevCard() {
    const cardIndex = this.state.cardIndex - 1;
    const canGoBack = cardIndex > -1;

    return (
      <div className={'card partial'}>
        {canGoBack && <button type={'button'} data-index={cardIndex} onClick={this.handleCardChange}>prev</button>}
        <img src={canGoBack ? this.props.cards[cardIndex].path : ''} alt={''}/>
      </div>
    )
  }

  renderNextCard() {
    const cardIndex = this.state.cardIndex + 1;
    const canGoFwd = cardIndex < this.props.cards.length;

    console.log('next index', cardIndex);

    return (
      <div className={'card partial'}>
        {canGoFwd && <button type={'button'} data-index={cardIndex} onClick={this.handleCardChange}>next</button>}
        <img src={canGoFwd ? this.props.cards[cardIndex].path : ''} alt={''}/>
      </div>
    )
  }

  render() {
    return (
      <div id={'gallery'}>
        <ul>
          <li>{this.renderPrevCard()}</li>
          <li>{this.renderCard()}</li>
          <li>{this.renderNextCard()}</li>
        </ul>
      </div>
    )
  }
}