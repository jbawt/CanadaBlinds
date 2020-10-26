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

  const width = getDimensions(widthStart, widthEnd);
  const height = getDimensions(heightStart, heightEnd);

  const MakeItem = function (X) {
    return <option value={X}>{X}</option>;
  };

  return (
    <div className="dimension-container">
      <h2>Dimensions</h2>
      <label for="width">Select Width:</label>
      <select id="width">{width.map(MakeItem)}</select>

      <label for="height">Select Height:</label>
      <select id="height">{height.map(MakeItem)}</select>
    </div>
  );
};

export default ProductDimensions;
