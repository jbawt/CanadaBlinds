import React from "react";

export default function Cart(props) {
  console.log(props)
  return (
    <h2>
      {props.product.name} {props.price} {props.motor} {props.height}
      {props.motor && <h2>motor yes</h2>}
      {!props.cordless && <h2>cordless no</h2>}
      {props.redtractableCord && <h2>rcm no</h2>}
      </h2>

    )
}