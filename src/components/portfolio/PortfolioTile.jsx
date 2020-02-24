import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { TiArrowForwardOutline, TiArrowRightThick } from "react-icons/all";
import { renderTechList } from "../../js/utilities";

import "../../styles/scss/portfolio-tile.scss";

export default function PortfolioTile(props) {
  const liveLink = props.project.uri ?
    <span>[ <a href={props.project.uri} target={"_blank"}>Live version <TiArrowForwardOutline aria-hidden={true} /></a> ]</span> : '';
  const sourceLink = props.project.source ?
    <span>[ <a href={props.project.source} target={"_blank"}>Source <TiArrowForwardOutline
      aria-hidden={true} /></a> ]</span> : '';
  const links = props.project.uri || props.project.source ?
    <p className={'standalone-link'}>{liveLink}{sourceLink}</p> : '';

  return (
    <div className={'portfolio-tile'}>
      <header>
        <h3>{props.project.title} {props.project.year ? `(${props.project.year})` : ''}</h3>
        <ul className={'tech'}>{renderTechList(props.project.tech)}</ul>
        {links}
      </header>
      <div className={'copy'}><ReactMarkdown source={props.project.copy} /></div>
      <p className={'standalone-link hvr-icon-wobble-horizontal wobble-horizontal-min'}>
        [ <Link className={'gallery-link'} to={`/gallery/${props.alias}#`}>
        Open full gallery <TiArrowRightThick className={'hvr-icon'} aria-hidden={true} /></Link> ]
      </p>
    </div>
  )
}