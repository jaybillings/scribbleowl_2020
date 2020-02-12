import React from 'react';
import {TiArrowUpThick} from "react-icons/ti";

import '../../styles/scss/scroll-top.scss';
import {handleAnchorClick} from "../../js/utilities";
import {Link} from "react-router-dom";

export default function ScrollTop(props) {
  return <div id={'jckb-scroller'}>
    <div className={'scroll-inner hvr-icon-wobble-vertical wobble-vertical-reverse'}>
      <Link to={'#top'} onClick={handleAnchorClick}>To top</Link>
      <TiArrowUpThick className={'hvr-icon'} aria-hidden={true} />
    </div>
  </div>
}