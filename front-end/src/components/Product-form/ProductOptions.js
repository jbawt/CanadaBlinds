import React from "react";
import "./ProductOptions.css";

export default function Product(props) {
  return (
    <div className="option-selectors">
      <label htmlFor="options">{props.option}</label>

      <select id="options">
      <option value="">-Select-</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
  );
}
