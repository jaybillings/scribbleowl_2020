import React from 'react';
import {TiArrowUpThick} from "react-icons/ti";

import '../../styles/scss/scroll-top.scss';

export default function ScrollTop(props) {
  return <div id={'jckb-scroller'}>
    <a href={'#top'} className={'hvr-icon-wobble-vertical wobble-vertical-reverse'}>
      To Top <TiArrowUpThick className={'hvr-icon'}/>
    </a>
  </div>
}