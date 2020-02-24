import React from 'react';
import { Link } from "react-router-dom";
import { TiArrowUpThick } from "react-icons/ti";
import { handleAnchorClick } from "../../js/utilities";
import '../../styles/scss/scroll-top.scss';

export default function ScrollTop(props) {
  return <div id={'jckb-scroller'}>
    <div className={'scroll-inner hvr-icon-wobble-vertical wobble-vertical-reverse'}>
      <Link to={'#'} onClick={handleAnchorClick}>To top</Link>
      <TiArrowUpThick className={'hvr-icon'} aria-hidden={true} />
    </div>
  </div>
}