import React from "react";
import "./ProductDimensions.css";

const ProductDimensions = (props) => {
  const widthStart = props.width[0];
  const widthEnd = props.width[props.width.length - 1];
  const heightStart = props.height[0];
  const heightEnd = props.height[props.height.length - 1];

  const getDimensions = function (start, end) {
    const newAr = [];
    for (let i = start; i <= end; i++) {
      newAr.push(i);
    }
    return newAr;
  };

  const widthArray = getDimensions(widthStart, widthEnd);
  const heightArray = getDimensions(heightStart, heightEnd);

  const MakeItem = function (X) {
    return (
      <option key={X} value={X}>
        {X}"
      </option>
    );
  };

  return (
    <div className="dimension-container">
      <h2>Dimensions</h2>
      <label htmlFor="width">Select Width (inches):</label>
      <select onChange={props.handleWidth} id="width">
        {widthArray.map(MakeItem)}
      </select>

      <label htmlFor="height">Select Height (inches):</label>
      <select onChange={props.handleHeight} id="height">
        {heightArray.map(MakeItem)}
      </select>
    </div>
  );
};

export default ProductDimensions;
