import React from "react";
import { TiArrowForwardOutline } from "react-icons/ti";

export default function ExternalLinks(props) {
  let links = [];

  const projURI = props.uri;
  if (projURI) links.push(<span key={'uri-link'}>[ <a href={projURI} target={'_blank'} rel={'noreferrer noopener'}>
      Live version <TiArrowForwardOutline aria-hidden={true} /></a> ]</span>);

  const projSource = props.source || null;

  if (projSource) {
    if (Array.isArray(projSource)) {
      projSource.forEach(link => {
        links.push(<span key={link.name}>[ <a href={link.uri} target={'_blank'} rel={'noreferrer noopener'}>
            {link.name} Source <TiArrowForwardOutline aria-hidden={true} /></a> ]</span>);
      });
    } else {
      links.push(<span key={'source-link'}>[ <a href={projSource} target={'_blank'} rel={'noreferrer noopener'}>
        Source <TiArrowForwardOutline aria-hidden={true} /></a> ]</span>)
    }
  }

  return <p className={'standalone-link'}>{links.map(link => link)}</p>
}