import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {BrowserRouter as Router} from "react-router-dom";

import Header from "../components/Header";

const navSections = [{"path": "section1", "title": "Section 1"}, {"path": "section2", "title": "Section2"}];
const title = "Test Title";
let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    render(
      <Router><Header title={title} navSections={navSections} /></Router>,
      container
    );
  });
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render the header", () => {
  // Proper title rendering
  expect(container.querySelector('h1').textContent).toEqual(title);
  // Spot check nav title
  expect(container.querySelector('li:first-of-type').textContent).toEqual(navSections[0].title);
  // Spot check nav link path
  expect(container.querySelector('li:last-of-type a').getAttribute('href')).toEqual(`/#${navSections[1].path}`);
});

it("should change the class on link click", () => {
  const navLink = container.querySelector('li:first-of-type a');

  // Initially should not have a class
  expect(navLink.getAttribute('class')).toBeFalsy();

  act(() => {
    navLink.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  });

  expect(navLink.getAttribute('class')).toBe('current');
});