import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

import About from "../components/sections/About";
import {BrowserRouter as Router} from "react-router-dom";

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
  const title = 'Test Title';
  const copy = 'test copy';
  const skillsSection = [{
    "header": "Development",
    "copy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus in.\n\nDignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Phasellus egestas tellus rutrum tellus pellentesque eu."
  }];

  act(() => {
    render(<Router><About title={title} copy={copy} skillsSection={skillsSection}/></Router>, container)
  });

  // Title
  expect(container.querySelector('h2').textContent).toBe(title);
  // Skills section
  expect(container.querySelector('h3').textContent).toBe(skillsSection[0].header);
});