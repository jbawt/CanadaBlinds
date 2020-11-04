import React, { Fragment } from "react";
import ProductList from "./ProductList";
import "./Home.css";

export default function Home({ products }) {
  if (!products.length) {
    return null;
  }

  const PL = products.slice(0, 2).map((product) => {
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
        <h1>
          <em>CanadaCustomBlinds</em>
        </h1>
      </header>
      <section className="welcome-pitch">
        <p>
          <em> "Reliable Shades Are The Foundation Of Our Business"  </em><br/>
        </p>
      </section>
      <h1 className="best-seller-title">Best Sellers</h1>
      <section className="container">{PL}</section>
      <section className="homepage-pitch">
          <section>
            <h4>Calgary Office: </h4> <br/>
            Name: (Client Name) <br/>
            Title: (Client Title) <br/>
            Phone: (Client Phone) <br/>
            Email: (Client Email) <br/>
            Address: (Client Office) <br/>
            </section>
            <br/>
            <section>
            <h4>Vancouver Office: </h4> <br/>
            Name: (Client Name) <br/>
            Title: (Client Title) <br/>
            Phone: (Client Phone) <br/>
            Email: (Client Email) <br/>
            Address: (Client Office) <br/>
            </section>          
        </section>
    </Fragment>
  );
}
