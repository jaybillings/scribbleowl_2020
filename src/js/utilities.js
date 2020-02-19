import React from "react";

/**
 * `renderCopy` transforms a string array into an array of paragraph blocks with keys, for use in React components.
 * @param {[string]} copy
 * @param {string} tag
 * @returns {[]}
 */
const renderCopy = function (copy, tag) {
  if (!copy) return null;
  if (!copy.length) return <p>{copy}</p>;

  return copy.map((line, index) => {
    const key = tag ? `copy_${tag}_${index}` : `copy_${index}`;
    return <p key={key}>{line}</p>
  });
};

/**
 * `renderTechList` renders an array of values into an array of list item blocks that contain either simple text or
 * links, depending on the list item. For use in React components.
 * @param {[]} sections // array of elements, either [{string} name] or [{string} name, {string} uri]
 * @returns {[]}
 */
const renderTechList = function (sections) {
  const itemList = sections.map((item, iter) => {
    if (typeof item !== "string" && item.length) {
      const itemTxt = iter < sections.length - 1 ? `${item[0]},` : item[0];
      return <a href={item[1]} target={'_blank'}>{itemTxt}</a>;
    } else if (iter < sections.length - 1) return `${item},`;
    else return item;
  });

  return itemList.map((item, iter) => <li key={iter}>{item}</li>);
};

/**
 * `handleAnchorClick` manually scrolls the browser window to and focuses on a pre-defined anchor.
 * Add this function to the onlick handler of the link directing users to the anchor.
 * @param {Event} e
 */
const handleAnchorClick = function (e) {
  if (!e.target.href) {
    console.error('Could not scroll to anchor -- no anchor.');
    return;
  }

  const anchorArr = e.target.href.split('#');
  if (anchorArr.length <= 1) return;

  const anchorID = anchorArr[anchorArr.length - 1];
  const target = document.querySelector(`#${anchorID}`);
  const section = document.querySelector(`#${anchorID}-section`);

  target.focus({preventScroll: true});

  if (section.scrollIntoViewIfNeeded) {
    // Not supported by all browsers but useful if present
    section.scrollIntoViewIfNeeded();
  } else {
    section.scrollIntoView();
  }
};

/**
 * `postData` uses the fetch API to send POST HTTP requests.
 * @param {string} url
 * @param {*} data - JSON-compatible data
 * @returns {Promise<JSON>}
 */
const postData = async function (url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await response.json();
};

export {
  renderCopy, renderTechList, handleAnchorClick, postData
}