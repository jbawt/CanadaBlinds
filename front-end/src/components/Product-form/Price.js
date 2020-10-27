import React, { useState, useEffect } from "react";
import "./Price.css";

export default function Product({ price, optionPrice }) {
  return (
    <div className="price-total-container">
      <h1>Item Total</h1>
      <div className="price-info">
        <h4>
          Retail price: <span>${price + optionPrice()}</span>
        </h4>
        <h2>Your price: ${price / 2 + optionPrice()}</h2>
        <h4>Total savings are ${price / 2}</h4>
      </div>
      <button type="submit">Add to cart</button>
    </div>
  );
}
