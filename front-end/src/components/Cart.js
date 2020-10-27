import React from "react";
import CartItem from "./CartItem"

export default function Cart(props) {

  const price = () => {
    let total = 0;
    for (let price of props.cart) {
      total += price.price;
    }
    return total;
  }

  const cartItems = props.cart.map((cartItem) => {
    return (
      <CartItem
        product={props.products[cartItem.product_id]}
        price={cartItem.price}
      />
    )
  })
  return (
    <div>
      {cartItems}
      {price()}
    </div>
  );
}