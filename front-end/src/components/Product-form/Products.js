import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDisplay from "./ProductDisplay";
import ProductDimensions from "./ProductDimensions";
import ProductOptions from "./ProductOptions";

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
  return (
    <div>
      <ProductDisplay product={state.product} />
      <ProductDimensions prices={state.prices} />
      <ProductOptions options={state.options} />
    </div>
  );
}
