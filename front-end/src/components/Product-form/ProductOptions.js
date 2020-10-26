import React from "react";
import "./ProductOptions.css";

export default function Product(props) {
  return (
    <div className="option-selectors">
      <label for="options">{props.option}</label>

      <select id="options">
      <option value="s">-Select-</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
  );
}
