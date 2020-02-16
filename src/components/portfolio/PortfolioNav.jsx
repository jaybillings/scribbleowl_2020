import React from "react";

import "../../styles/scss/portfolio-nav.scss";

export default function PortfolioNav(props) {
  return (
    <nav className={'portfolioNav'}>
      <ul>
        {props.projectNames.map(([alias, title]) =>
          <li key={alias} tabIndex={0} data-alias={alias}
              className={alias === props.projAlias ? 'selected' : 'text-grow-out'}
              onClick={props.handleNavClick}
              onKeyDown={props.handleNavKeyDown}>
            <span>{title}</span>
          </li>
        )}
      </ul>
    </nav>
  )
}