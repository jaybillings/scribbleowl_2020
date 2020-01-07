import React from "react";

const renderCopy = function(copy) {
  if (!copy) return;
  if (!copy.length) return <p>{copy}</p>;
  return copy.map(line => <p key={Math.round(Math.random() * 1000)}>{line}</p>);
};

export {
  renderCopy
}