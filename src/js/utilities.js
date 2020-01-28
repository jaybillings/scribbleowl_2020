import React from "react";

const renderCopy = function(copy, tag) {
  if (!copy) return;
  if (!copy.length) return <p>{copy}</p>;

  return copy.map((line, index) => {
    const key = tag ? `copy_${tag}_${index}` : `copy_${index}`;
    return <p key={key}>{line}</p>
  });
};

export {
  renderCopy
}