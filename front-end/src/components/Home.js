import React from "react";
import ProductList from './ProductList'

export default function Home({products}) {
  if (!products.length) {
    return null
  }

  const PL = products.map((product) => {
    return <ProductList
    key ={product.id}
    name={product.name}
    image={product.image} 
    description={product.description}
    price={product.price}/>
  })
  return (
    <ul>
      {PL}
    </ul>

    );
}