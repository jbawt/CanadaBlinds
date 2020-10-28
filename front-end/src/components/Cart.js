import React, { Fragment } from "react";
import CartItem from "./CartItem";

import "./Cart.css";

export default function Cart(props) {
  const price = () => {
    let total = 0;
    for (let price of props.cart) {
      total += price.price;
    }
    return total;
  };

  const cartItems = props.cart.map((cartItem) => {
    return (
      <CartItem
        key={cartItem.id}
        product={props.products[cartItem.product_id]}
        price={cartItem.price}
        width={cartItem.width}
        height={cartItem.height}
        motor={cartItem.motor_option}
        cordless={cartItem["cordless_option"]}
        remote={cartItem.remote_option}
        metalBeadedChain={cartItem.metalbeadedchain_option}
        retractableCord={cartItem.retractable_cord_option}
        charger={cartItem.charger}
      />
    );
  });
  return (
    <Fragment>
      <h1 className="cart-title">Cart</h1>
      <table className="content-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Width</th>
            <th>Height</th>
            <th>Options</th>
            <th>Price</th>
            <th>Remove Item</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
      </table>
      <div className="place-order-container">
        <div className="button">
          <a href="#">Place Order</a>
        </div>
        <h4>Total: ${price()}</h4>
      </div>
    </Fragment>
  );
}
