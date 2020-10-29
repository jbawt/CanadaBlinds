import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

export default function Success(props) {
  const generateRandomString = () => {
    return Math.random().toString(36).slice(2, 12);
  };
  return (
    <div className="thank-you-div">
      <h1>Thank you for your order!</h1>
      <h2>Your order number is: #{generateRandomString()}</h2>
      <Link to="/products">
        <div className="button-return-shopping">Continue Shopping</div>
      </Link>
    </div>
  );
}
