import React from "react";
import "./product-display.css";

export default function ProductDisplay(props) {
  return (
    <div className="product-container">
      <h1>{props.product.name}</h1>
      <img src={props.product.image} />
      <p>{props.product.description}</p>
    </div>
  );
}
