import React from "react";

const renderCopy = function (copy, tag) {
  if (!copy) return;
  if (!copy.length) return <p>{copy}</p>;

  return copy.map((line, index) => {
    const key = tag ? `copy_${tag}_${index}` : `copy_${index}`;
    return <p key={key}>{line}</p>
  });
};

/**
 * handleAnchorClick manually scrolls to and focuses on a pre-defined anchor.
 *
 * Add this function to the onlick handler of the link directing users to the anchor.
 * TODO: Why doesn't Link work properly with anchors in the first place?
 *
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
    section.scrollIntoViewIfNeeded();
  } else {
    section.scrollIntoView();
  }
};

export {
  renderCopy, handleAnchorClick
}