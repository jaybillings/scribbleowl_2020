import React from "react";
import { render, unmountComponentAtNode} from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";

import GalleryImageNav from "../components/gallery/GalleryImageNav";

let container = null;
const projID = 'test';
const projImages = [
  {
    "name": "goat-blep.jpg",
    "copy": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab\n\nillo inventore veritatis et quasi architecto\n\n## beatae\n\nvitae dicta sunt explicabo."
  },
  {
    "name": "goat-in-pink-tutu.jpg",
    "copy": "sit aspernatur aut odit aut fugit sit aspernatur aut\n\n*odit* aut fugit sit aspernatur aut odit aut fugit sit aspernatur aut odit aut fugit\n\nsed *quia* _consequuntur_ magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    "name": "jack-the-goat.jpg",
    "copy": "# SOMOS\n\nUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex."
  }
];

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('displays image nav at beginning of list', () => {
  act(() => {
    render(<Router><GalleryImageNav imgIndex={0} projID={projID} imgCount={projImages.length} /></Router>, container);
  });

  expect(container.querySelector('li:first-of-type a')).toBeFalsy();
  expect(container.querySelector('li:nth-of-type(2) a')).toBeFalsy();
  expect(container.querySelector('li:nth-of-type(4) a')).toBeTruthy();
  expect(container.querySelector('li:last-of-type a')).toBeTruthy();
});

it('displays image nav at middle of list', () => {
  act(() => {
    render(<Router><GalleryImageNav imgIndex={1} projID={projID} imgCount={projImages.length} /></Router>, container);
  });

  expect(container.querySelector('li:first-of-type a')).toBeTruthy();
  expect(container.querySelector('li:nth-of-type(2) a')).toBeTruthy();
  expect(container.querySelector('li:nth-of-type(4) a')).toBeTruthy();
  expect(container.querySelector('li:last-of-type a')).toBeTruthy();

});

it('displays image nav at end of list', () => {
  act(() => {
    render(<Router><GalleryImageNav imgIndex={2} projID={projID} imgCount={projImages.length} /></Router>, container);
  });

  expect(container.querySelector('li:first-of-type a')).toBeTruthy();
  expect(container.querySelector('li:nth-of-type(2) a')).toBeTruthy();
  expect(container.querySelector('li:nth-of-type(4) a')).toBeFalsy();
  expect(container.querySelector('li:last-of-type a')).toBeFalsy();
});
