import React from 'react';

import '../../styles/scss/footer.scss';

export default function Footer(props) {
  return (
    <footer>
      <p>By Jay Billings, 2019-2020.</p>
      <p><a href={props.siteURI} target={'_blank'} rel={'noopener noreferrer'}>
        View source and copyright on GitHub</a>.</p>
    </footer>
  )
}