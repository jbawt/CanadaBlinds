import React from "react";
import "./ProductList.css";

export default function ProductList(props) {


  

  return (
    <article className = "product">
      <header>
        <h4> {props.name} </h4>
        <img src={props.image}/>
      </header>
      <p>
        {props.description}
      </p>
      <footer>
        <button type="button">add to cart</button>
        <aside className="price">
          {props.price}
        </aside>
      </footer>
    </article>
  );
}