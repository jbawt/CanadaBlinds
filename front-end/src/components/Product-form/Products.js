import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDisplay from "./ProductDisplay";
import ProductDimensions from "./ProductDimensions";
import ProductOptions from "./ProductOptions";
import "./Products.css";

export default function Product() {
  const [state, setState] = useState({
    product: [],
    prices: [],
    options: [],
  });

  const { id } = useParams();
  const url = `/api/products/${id}`;
  useEffect(() => {
    axios.get(url).then((data) => {
      setState((prev) => ({
        ...prev,
        product: data.data.product,
        prices: data.data.prices,
        options: data.data.options,
      }));
    });
  }, []);

  const option = state.options.map((option) => {
    let name = option.option.charAt(0).toUpperCase() + option.option.slice(1);
    return (
      <ProductOptions
        key={option.id}
        option={name}
        product={option.product_id}
        price={option.price}
      />
    );
  });

  const width = state.prices.map((width) => {
    return width.width;
  });

  const height = state.prices.map((height) => {
    return height.height;
  });

  return (
    <div className="product-page">
      <ProductDisplay product={state.product} />
      {/* <ProductDimensions prices={state.prices} /> */}
      <section className="option-container">
        <h1>Your Customizations</h1>
        {option}
      </section>
    </div>
  );
}
