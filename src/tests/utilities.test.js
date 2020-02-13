import React from 'react'
import {renderCopy, handleAnchorClick} from "../js/utilities";
import {act} from "react-dom/test-utils";

it("properly transforms paragraphs", () => {
  const copy = ["some test text", "some more test text"];
  let result;

  // Without provided key
  result = renderCopy(copy);
  expect(result).toEqual([<p key={'copy_0'}>some test text</p>, <p key={'copy_1'}>some more test text</p>]);
  // With provided key
  result = renderCopy(copy, 'test');
  expect(result).toEqual([<p key={'copy_test_0'}>some test text</p>, <p key={'copy_test_1'}>some more test text</p>]);
});

it("properly scrolls and focuses on click", () => {
  // Jest doesn't really do layout, so scrollIntoView must be mocked
  window.HTMLElement.prototype.scrollIntoView = jest.fn();

  const container = document.createElement('div');
  container.innerHTML =
    '<div>' +
    '<div><a id="test-anchor-link" href="#test-anchor">Go to anchor</a></div>' +
    '<div style="height:1000px"></div>' +
    '<div id="test-anchor-section" style="height:1000px">' +
    '<a id="test-anchor" href="#test-anchor">#</a>' +
    '</div>' +
    '</div>';

  document.body.appendChild(container);

  document.querySelector('#test-anchor-link').onclick = handleAnchorClick;
  act(() => {
    document.querySelector('#test-anchor-link').dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  // scrollIntoView was called
  expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();
  // Focus has shifted to anchor
  expect(document.activeElement).toBe(document.querySelector('#test-anchor'));
});