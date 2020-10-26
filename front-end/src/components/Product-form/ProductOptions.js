import React from "react";

export default function Product(props) {

  return (
    <div>
      <label for="options">{props.option}</label>

      <select id="options">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div >
  )

}