import React, {Component} from "react";

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {currentIndex: 0, cards: []};

    this.renderCard = this.renderCard().bind(this);
  }

  renderCard(item, index) {
    return (
      <li className={'card'}>
        <img alt={''} src={item[0]} />
        <p>{item[1]}</p>
      </li>
    )
  }

  render() {
    const visibleCards = [this.cards[this.currentIndex = 1], this.cards[this.currentIndex], this.cards[this.currentIndex + 1]];

    return (
      <div className={'gallery'}>
        <div className={'arrowLeft'}>$lt; PREV</div>
        <ul>{visibleCards.map((card, index) => this.renderCard())}</ul>
        <div className={'arrowRight'}>NEXT $gt;</div>
      </div>
    )
  }
}