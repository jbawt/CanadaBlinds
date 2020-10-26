import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDisplay from "./ProductDisplay";
import ProductDimensions from "./ProductDimensions";
import ProductOptions from "./ProductOptions";
import Price from "./Price";
import "./Products.css";

export default function Product() {
  const [state, setState] = useState({
    product: [],
    prices: [],
    options: [],
  });
  const [width, setWidth] = useState(24);
  const [height, setHeight] = useState(36);
  const [optionItem, setOption] = useState({
    cordless: false,
    "metal-beaded-chain": false,
    motor: false,
    remote: false,
    charger: false,
    "retractable-cord": false
  })
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

  const optionlist = state.options.map((option) => {
    let name = option.option.charAt(0).toUpperCase() + option.option.slice(1);
    return (
      <ProductOptions
        setOptions={setOption}
        key={option.id}
        option={name}
        optionName={option.option}
      />
    );
  });

  const widthArray = state.prices.map((width) => {
    return width.width;
  });

  const heightArray = state.prices.map((height) => {
    return height.height;
  });

  const handleWidth = (event) => {
    event.preventDefault()
    setWidth(parseInt(event.target.value, 10))
  }

  const handleHeight = (event) => {
    event.preventDefault()
    setHeight(parseInt(event.target.value, 10))
  }
  console.log(state.options)
  let [selectedItem] = state.prices.filter((item) => item.width === width && item.height === height)
  let totalOptions = () => {
    let optionPrice = 0;
    if (optionItem.cordless === true) {
      optionPrice += state.options[0].price
    } else {
    }
    if (optionItem["metal-beaded-chain"] === true) {
      optionPrice += state.options[1].price
    } 
    if (optionItem.motor === true) {
      optionPrice += state.options[2].price
    }
    if (optionItem.remote === true) {
      optionPrice += state.options[3].price
    }
    if (optionItem.charger === true) {
      optionPrice += state.options[4].price
    }
    if (optionItem["retractable-cord"] === true) {
      optionPrice += state.options[0].price
    }
    console.log(optionPrice)
    return optionPrice;
  }
  if (!selectedItem) {
    return selectedItem = null
  }

  return (
    <div className="product-page">
      <ProductDisplay product={state.product} />
      <ProductDimensions
        handleWidth={handleWidth}
        handleHeight={handleHeight}
        width={widthArray}
        height={heightArray}
      />
      <section className="option-container">
        <h1>Your Customizations</h1>
        {optionlist}
      </section>
      {!!selectedItem && <Price price={selectedItem.price} optionPrice={totalOptions} />}
    </div>
  );
}
