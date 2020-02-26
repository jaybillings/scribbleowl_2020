import React from 'react'
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import { BrowserRouter as Router } from "react-router-dom"

import GalleryNav from "../components/gallery/GalleryNav";

let container = null;
const projects = {
  "test": {
    "title": "The Test Project",
    "thumbnail": "goat-blep.jpg",
    "year": "2009",
    "uri": "https://scribbleowl.com",
    "source": "https://github.com",
    "copy": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n\nsed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "tech": [
      "HTML",
      "CSS",
      "LESS",
      "Angular"
    ]
  },
  "test2": {
    "title": "The Other Test",
    "thumbnail": "goat-in-pink-tutu.jpg",
    "year": "2020",
    "uri": "https://imdb.com",
    "source": "https://github.com",
    "copy": "# Header *Test* *copy*",
    "tech": ["VBScript", "IPv6"]
  },
  "test3": {
    "title": "The Third Test",
    "thumbnail": "jack-the-goat.jpg",
    "year": "2024",
    "uri": "https://imdb.com",
    "source": "https://github.com",
    "copy": "# Header *Test* *copy*",
    "tech": ["VBScript", "IPv6"]
  }
};
const projList = ['test', 'test2', 'test3'];

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('displays project navigation', () => {
  const projID = 'test';

  act(() => {
    render(<Router><GalleryNav projID={projID} projects={projects} projectOrder={projList} /></Router>, container)
  });

  expect(container.querySelector('li:first-of-type a').textContent).toContain('The Third Test');
  expect(container.querySelector('li:last-of-type a').textContent).toContain('The Other Test');
});

it('displays project navigation wrapping', () => {
  const projID = 'test3';

  act(() => {
    render(<Router><GalleryNav projID={projID} projects={projects} projectOrder={projList} /></Router>, container)
  });

  expect(container.querySelector('li:first-of-type a').textContent).toContain('The Other Test');
  expect(container.querySelector('li:last-of-type a').textContent).toContain('The Test Project');
});
