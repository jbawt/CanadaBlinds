import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import CartItem from "./CartItem";
import "./Cart.css";
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout';


export default function Cart(props) {
  let history = useHistory();

//   const pay = () => {
//     return axios.post("/order", props.users.id).then((res) => {
//       axios.get("/order").then((response) => {
//         props.setState((prev) => ({
//           ...prev,
//           order: res.data
//         }))
//       })
//     })
//   }
  const cartLength = props.cart.length;

  const deleteCart = () => {
    for(let item of props.cart) {
        axios
          .delete(`/api/orderli`, { data: { id: item.id } })
          .then((response) => {
            axios.get(`/api/orderli`).then((res) => {
              props.setState((prev) => {
                return {
                  ...prev,
                  order_li: res.data,
                }
              })
            })
          })
          .catch((error) => console.log(error));
    }
    history.push("/ordersuccess");
  }

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
        id={cartItem.id}
        setState={props.setState}
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
        {cartLength ?  
      <StripeCheckout
        token={deleteCart}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      />
        : <h2>Cart Empty</h2>}
        <h4>Total: ${price()}</h4>
      </div>
    </Fragment>
  );
}
