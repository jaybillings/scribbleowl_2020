import React from 'react'
import {renderCopy} from "../js/utilities";

it("properly transforms paragraphs", () => {
  const copy = ["some test text", "some more test text"];
  let result;

  // Without provided key
  result = renderCopy(copy);
  expect(result).toEqual([<p key={'copy_0'}>some test text</p>,<p key={'copy_1'}>some more test text</p>]);
  // With provided key
  result = renderCopy(copy, 'test');
  expect(result).toEqual([<p key={'copy_test_0'}>some test text</p>,<p key={'copy_test_1'}>some more test text</p>]);
});