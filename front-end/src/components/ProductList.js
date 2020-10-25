import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

export default function ProductList(props) {
  const [hover, setHover] = useState(false);

  return (
    <article className="product">
      <Link to={`/products/${props.id}`}>
        <header>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover && <img src={props.image2} alt="main" />}
            {!hover && <img src={props.image} alt="hover" />}
          </div>
        </header>
      </Link>
      <h2 className="product-name"> {props.name} </h2>
    </article>
  );
}
