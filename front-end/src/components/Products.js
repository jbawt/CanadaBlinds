import React, { Fragment } from "react";
import ProductList from "./ProductList";
import "./Home.css";

export default function Products({ products }) {
  if (!products.length) {
    return null;
  }

  const PL = products.map((product) => {
    return (
      <ProductList
        key={product.id}
        id={product.id}
        name={product.name}
        image={product.image}
        image2={product.thumbnail}
        description={product.description}
        price={product.price}
      />
    );
  });
  return (
    <Fragment>
      <h1> Products </h1>
      <section className="container">{PL}</section>
    </Fragment>
  )
}
