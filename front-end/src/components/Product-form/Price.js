import React, { useState, useEffect } from "react";
import "./Price.css";

export default function Product({ price, optionPrice }) {
  return (
    <div className="price-total-container">
      <h1>Item Total</h1>
      <div className="price-info">
        <h2>{price + optionPrice()}$</h2>
      </div>
      <button type="submit">Add to cart</button>
    </div>
  );
}
