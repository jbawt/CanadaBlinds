import React from "react";
import "./ProductList.css";

export default function ProductList(props) {


  

  return (
    <article className = "product">
      <header>
        <h4> {props.name} </h4>
        <img src={props.image}/>
      </header>
      <footer>
      <p>
        {props.description}
      </p>
        <button type="button">Customize</button>
      </footer>
    </article>
  );
}