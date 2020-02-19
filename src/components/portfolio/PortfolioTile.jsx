import React from "react";
import {Link} from "react-router-dom";
import {TiArrowForwardOutline, TiArrowRightThick} from "react-icons/all";

import "../../styles/scss/portfolio-tile.scss";
import ReactMarkdown from "react-markdown";

export default function PortfolioTile(props) {
  const liveLink = props.project.uri ?
    <span>[ <a href={props.project.uri} target={"_blank"}>Live version <TiArrowForwardOutline
      aria-hidden={true}/></a> ]</span> : '';
  const sourceLink = props.project.source ?
    <span>[ <a href={props.project.source} target={"_blank"}>Source <TiArrowForwardOutline
      aria-hidden={true}/></a> ]</span> : '';
  const links = props.project.uri || props.project.source ? <p className={'portfolio-link external-link'}>{liveLink}{sourceLink}</p> : '';

  return (
    <div className={'portfolioTile'}>
      <header>
        <h3>{props.project.title} {props.project.year ? `(${props.project.year})` : ''}</h3>
        <p className={'tech'}><strong>{props.project.tech.join(', ')}</strong></p>
        {links}
      </header>
      <div className={'copy'}><ReactMarkdown source={props.project.copy} /></div>
      <p className={'portfolio-link hvr-icon-wobble-horizontal'}>
        [ <Link to={`/gallery/${props.alias}#top`}>
        Open full gallery <TiArrowRightThick className={'hvr-icon'} aria-hidden={true}/></Link> ]
      </p>
    </div>
  )
}