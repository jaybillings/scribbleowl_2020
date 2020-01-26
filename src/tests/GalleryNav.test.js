import React from 'react'
import {render, unmountComponentAtNode} from "react-dom"
import {act} from "react-dom/test-utils"
import {BrowserRouter as Router} from "react-router-dom"

import GalleryNav from "../components/gallery/GalleryNav";

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('displays first project first/image navigation', () => {
  const projID = 'one', projList = ['one', 'two', 'three'], imgIndex = 0, imgCount = 5;

  act(() => {
    render(<Router><GalleryNav projID={projID} projList={projList} imgIndex={imgIndex} imgCount={imgCount} /></Router>, container)
  });

  expect(container.querySelector('li:first-of-type a')).toBeFalsy();
  expect(container.querySelector('li:nth-of-type(2) a')).toBeFalsy();
  expect(container.querySelector('li:nth-of-type(4) a')).toBeTruthy();
  expect(container.querySelector('li:last-of-type a')).toBeTruthy();
});

it('displays middle project/middle image nav', () => {
  const projID = 'two', projList = ['one', 'two', 'three'], imgIndex = 3, imgCount = 5;

  act(() => {
    render(<Router><GalleryNav projID={projID} projList={projList} imgIndex={imgIndex} imgCount={imgCount} /></Router>, container)
  });

  expect(container.querySelector('li:first-of-type a')).toBeTruthy();
  expect(container.querySelector('li:nth-of-type(2) a')).toBeTruthy();
  expect(container.querySelector('li:nth-of-type(4) a')).toBeTruthy();
  expect(container.querySelector('li:last-of-type a')).toBeTruthy();
});

it('displays last project/last image nav', () => {
  const projID = 'three', projList = ['one', 'two', 'three'], imgIndex = 4, imgCount = 5;

  act(() => {
    render(<Router><GalleryNav projID={projID} projList={projList} imgIndex={imgIndex} imgCount={imgCount} /></Router>, container)
  });

  expect(container.querySelector('li:first-of-type a')).toBeTruthy();
  expect(container.querySelector('li:nth-of-type(2) a')).toBeTruthy();
  expect(container.querySelector('li:nth-of-type(4) a')).toBeFalsy();
  expect(container.querySelector('li:last-of-type a')).toBeFalsy();
});
