import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import {TiArrowRightThick } from "react-icons/all";
import { renderTechList } from "../../js/utilities";

import "../../styles/scss/portfolio-tile.scss";
import ExternalLinks from "../common/ExternalLinks";

export default function PortfolioTile(props) {
  return (
    <div className={'portfolio-tile'}>
      <header>
        <h3>{props.project.title} {props.project.year ? `(${props.project.year})` : ''}</h3>
        <ul className={'tech'}>{renderTechList(props.project.tech)}</ul>
        <ExternalLinks uri={props.project.uri} source={props.project.source} />
      </header>
      <div className={'copy'}><ReactMarkdown source={props.project.copy} /></div>
      <p className={'standalone-link hvr-icon-wobble-horizontal wobble-horizontal-min'}>
        [ <Link className={'gallery-link'} to={`/gallery/${props.alias}`}>
        Open full gallery <TiArrowRightThick className={'hvr-icon'} aria-hidden={true} /></Link> ]
      </p>
    </div>
  )
}