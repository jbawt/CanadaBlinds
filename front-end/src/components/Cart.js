import React from "react";

export default function Cart(props) {

  const price = () => {
    let total = 0;
    for (let price of props.cart) {
      total += price.price;
    }
    return total;
  }
  return (
    <div>
      {price()}
    </div>
  );
}