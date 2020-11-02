import React from "react";
import "./ProductDisplay.css";

export default function ProductDisplay(props) {
  return (
    <div className="product-container">
      <h1>{props.product.name}</h1>
      <img src={props.product.image} alt="product" />
      <p>{props.product.description}</p>
    </div>
  );
}
