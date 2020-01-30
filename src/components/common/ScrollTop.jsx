import React from 'react';
import {TiArrowUpThick} from "react-icons/ti";

import '../../styles/scroll-top.css';

export default function ScrollTop(props) {
  return <div id={'jckb-scroller'} className={'hvr-icon-up'}>
    <a href={'#top'}>
      To Top <TiArrowUpThick className={'hvr-icon'}/>
    </a>
  </div>
}