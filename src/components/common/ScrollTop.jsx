import React from 'react';
import {TiArrowUpThick} from "react-icons/ti";

import '../../styles/scss/scroll-top.scss';

export default function ScrollTop(props) {
  return <div id={'jckb-scroller'}>
    <div className={'scroll-inner hvr-icon-wobble-vertical wobble-vertical-reverse'}>
      <a href={'#top'}>To Top</a>
      <TiArrowUpThick className={'hvr-icon'} aria-hidden={true} />
    </div>
  </div>
}