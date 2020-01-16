import React from "react";

const renderCopy = function(copy, tag) {
  if (!copy) return;
  if (!copy.length) return <p>{copy}</p>;
  return copy.map((line, index) => <p key={`copy_${tag}_${index}`}>{line}</p>);
};

export {
  renderCopy
}