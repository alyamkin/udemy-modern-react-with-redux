import React from "react";
import Flower from "./svg/Flower";

const Field = function ({ value, onChange }) {
  return (
    <div className="field">
      <Flower className="flower-right" fill="rgb(110, 146, 119)" />
      <Flower className="flower-left" fill="rgb(249, 148, 59)" />
      <h1>Translate App</h1>
      <label>Enter English</label>
      <input
        className="input"
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Field;
