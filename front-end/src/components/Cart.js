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

  for (let cartItem of props.cart) {
    if (props.productObj[cartItem.product_id].id === cartItem.product_id) {
      products.push(product);
    }
  } 
  
 
  // const match = products.map((product) => {
  //   return (
  //     <CartItem 
  //       name={product.name}
  //       description={product.description}
  //       image={product.thumbnail}
  //       price={product.price}
  //     />
  //   )
  // })

  return (
    <div>
      {/* {match}
      {price()} */}
    </div>
  );
}