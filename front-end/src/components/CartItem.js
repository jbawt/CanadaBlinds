import React from "react";

export default function Cart(props) {

  return (
    <h2>{props.product.name} {props.price}</h2>
  )
}