import React from "react";
import "./ProductOptions.css";

export default function Product({optionName, setOptions, option}) {

  const ifSelected = (event) => {
    if(event.target.value==="Yes") {
      setOptions((prev) => ({
        ...prev,
        [optionName]: true,
      }));
    } else {
      setOptions((prev) => ({
        ...prev,
        [optionName]: false,
      }));
    }
  }

  return (
    <div className="option-selectors">
      <label htmlFor="options">{option}</label>

      <select id="options" onChange={(e) => ifSelected(e)}>
      <option value="">-Select-</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
}
