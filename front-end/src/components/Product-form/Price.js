import React from "react";
import "./Price.css";

export default function Product(props) {
  return (
    <div className="price-total-container">
      <h2>Item Total</h2>
      <div className="price-info">
        <h4>
          Retail price: <span>${props.price + props.optionPrice()}</span>
        </h4>
        <h2>Your price: ${props.price / 2 + props.optionPrice()}</h2>
        <h4>Total savings are ${props.price / 2}</h4>
      </div>
      <button onClick={props.handleSubmit} type="submit">
        Add to cart
      </button>
    </div>
  );
}
