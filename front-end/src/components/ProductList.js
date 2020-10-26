import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

export default function ProductList(props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="product"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <header>
        <Link to={`/products/${props.id}`}>
          <div>
            {hover && <img src={props.image} alt="main" />}
            {!hover && <img src={props.image2} alt="hover" />}
          </div>
        </Link>
        <h2 className="product-name"> {props.name} </h2>
      </header>
    </div>
  );
}
