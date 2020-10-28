import React, { Fragment } from "react";
import ProductList from "./ProductList";
import "./Home.css";

export default function Home({ products }) {
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
      <header className="home-header">
        <h1>Pick and Customize Your New Blinds!</h1>
      </header>
      <section className="container">{PL}</section>
      <section className="homepage-pitch">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </Fragment>
  );
}
