import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {BrowserRouter as Router} from "react-router-dom";

import Portfolio from "../components/sections/Portfolio";

let container = null;
const title = 'Test Portfolio', projectList = ["vsem", "mcb"];
const projects = {
  "vsem": {
    "title": "Visit Seattle Events Manager",
    "thumbnail": "https://via.placeholder.com/250/989898.png",
    "year": "2028",
    "copy": "Probably not being used but you never know",
    "tech": [
      "NodeJS",
      "FeathersJS",
      "ReactJS",
      "CSS",
      "MariaDB",
      "KNEX"
    ]
  },
  "mcb": {
    "title": "Meteor Client Backend",
    "thumbnail": "https://via.placeholder.com/250/444444.png",
    "year": "1992",
    "copy": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit\n\nsed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "tech": [
      "Python",
      "jQuery",
      "SCSS"
    ]
  }
};

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);

  act(() => {
    render(<Router><Portfolio title={title} projects={projects} projectList={projectList}/></Router>, container)
  });
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders from props", () => {
  // Title matches
  expect(container.querySelector('h2').textContent).toBe(`# ${title}`);
  // Background image matches
  expect(container.querySelector('.portfolio > div').style.background).toBe(`url(${projects[projectList[0]].thumbnail})`);
  // Nav item has proper class
  expect(container.querySelector('li.selected').textContent).toBe(projects[projectList[0]].title);
  // Nav item below lacks this class
  expect(container.querySelector('li:nth-of-type(2)').className).not.toMatch(/selected/);
  // Tile gallery link directs to correct location
  expect(container.querySelector('.gallery-link').getAttribute('href')).toBe(`/gallery/${projectList[0]}`);
});

it("changes the rendered tile on nav click", () => {
  act(() => {
    container.querySelector('nav li:nth-of-type(2)').dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  // Background image matches
  expect(container.querySelector('.portfolio > div').style.background).toBe(`url(${projects[projectList[1]].thumbnail})`);
  // Nav item has proper class
  expect(container.querySelector('li.selected').textContent).toBe(projects[projectList[1]].title);
  // Nav item above lacks this class
  expect(container.querySelector('li:first-of-type').className).not.toMatch(/selected/);
  // Tile gallery link directs to correct location
  expect(container.querySelector('.gallery-link').getAttribute('href')).toBe(`/gallery/${projectList[1]}`);
});
