import React from 'react'
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {BrowserRouter as Router} from "react-router-dom"

import GalleryHeader from "../components/gallery/GalleryHeader"

let container = null;
const title = "Test Title";

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    render(<Router><GalleryHeader title={title} /></Router>, container)
  })
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders from props", () => {
  expect(container.querySelector('h1').textContent).toContain(title);
});
