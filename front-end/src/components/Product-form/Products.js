import React, { useEffect, useState, Fragment } from "react";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import ProductDisplay from "./ProductDisplay";
import ProductDimensions from "./ProductDimensions";
import ProductOptions from "./ProductOptions";
import Price from "./Price";
import "./Products.css";

export default function Product(props) {
  const [state, setState] = useState({
    product: [],
    prices: [],
    options: [],
  });
  const [redirect, setRedirect] = useState(false);
  const [width, setWidth] = useState(24);
  const [height, setHeight] = useState(36);
  const [optionItem, setOption] = useState({
    cordless: false,
    "metal-beaded-chain": false,
    motor: false,
    remote: false,
    charger: false,
    "retractable-cord": false,
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
    event.preventDefault();
    setWidth(parseInt(event.target.value, 10));
  };
  const findLow = (dimension, arr) => {
    if (dimension < arr[0]) {
      return arr[0];
    }
    for (let i = 0; i < arr.length; i++) {
      if (dimension < arr[i]) {
        return arr[i - 1];
      }
    }
    return arr[arr.length - 1];
  };
  const handleHeight = (event) => {
    event.preventDefault();
    setHeight(parseInt(event.target.value, 10));
  };
  let [selectedItem] = state.prices.filter(
    (item) =>
      item.width === findLow(width, widthArray) &&
      item.height === findLow(height, heightArray)
  );
  let totalOptions = () => {
    let optionPrice = 0;
    let cordlessCurrent = null;
    let mbc = null;
    let motorCurrent = null;
    let remoteCurrent = null;
    let chargerCurrent = null;
    let retractableCurrent = null;
    if (optionItem.cordless === true) {
      optionPrice += state.options[0].price;
      cordlessCurrent = true;
    }
    if (!optionItem.cordless && cordlessCurrent) {
      optionPrice -= state.options[0].price;
      cordlessCurrent = false;
    }
    if (optionItem["metal-beaded-chain"] === true) {
      optionPrice += state.options[1].price;
      mbc = true;
    }
    if (!optionItem["metal-beaded-chain"] && mbc) {
      optionPrice -= state.options[1].price;
      mbc = false;
    }
    if (optionItem.motor === true) {
      optionPrice += state.options[2].price;
      motorCurrent = true;
    }
    if (!optionItem.motor && motorCurrent) {
      optionPrice -= state.options[1].price;
      motorCurrent = false;
    }
    if (optionItem.remote === true) {
      optionPrice += state.options[3].price;
      remoteCurrent = true;
    }
    if (!optionItem.remote && remoteCurrent) {
      optionPrice -= state.options[1].price;
      remoteCurrent = false;
    }
    if (optionItem.charger === true) {
      optionPrice += state.options[4].price;
      chargerCurrent = true;
    }
    if (!optionItem.charger && chargerCurrent) {
      optionPrice -= state.options[1].price;
      chargerCurrent = false;
    }
    if (optionItem["retractable-cord"] === true) {
      optionPrice += state.options[0].price;
      retractableCurrent = true;
    }
    if (!optionItem["retractable-cord"] && retractableCurrent) {
      optionPrice -= state.options[1].price;
      retractableCurrent = false;
    }

    return optionPrice;
  };
  if (!selectedItem) {
    return (selectedItem = null);
  }

  let orderItem = {
    price: (selectedItem.price / 2) + totalOptions(),
    product_id: selectedItem.product_id,
    user_id: 1,
    motor_option: optionItem.motor,
    cordless_option: optionItem.cordless,
    remote_option: optionItem.remote,
    metalbeadedchain_option: optionItem["metal-beaded-chain"],
    retractable_cord_option: optionItem["retractable-cord"],
    width: width,
    height: height
  }


  const handleSubmit = () => {
    return axios.post(`/api/orderli`, orderItem).then((response) => {
      axios.get(`/api/orderli`).then((res) => {
        props.setState((prev) => {
          return {
          ...prev,
          order_li: res.data
          }
        })
        setRedirect(true);
      })
    }).catch((error) => console.log(error))
  }


  return (
    <Fragment>
      {redirect && <Redirect to="/products" />}
      <div className="product-page">
        <ProductDisplay product={state.product} />
        <div className="product-price-container">
          <div className="size-option-container">
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
          </div>
          {!!selectedItem && (
            <Price
              price={selectedItem.price}
              optionPrice={totalOptions}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
}
