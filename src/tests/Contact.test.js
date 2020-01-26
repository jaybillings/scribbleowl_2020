import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

import Contact from "../components/sections/Contact";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders from props', () => {
  const title = "Test Title";
  const copy = ["Test copy"];

  act(() => {
    render(<Contact title={title} copy={copy} />, container);
  });

  // Title matches
  expect(container.querySelector('h2').textContent).toBe(title);
  // Contact form is present
  expect(container.querySelector('form.contactForm')).toBeTruthy();
});