import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./Products";
import "./ProductList.css";

export default function ProductList(props) {
  const [hover, setHover] = useState(false)

  return (

    <article className = "product" >
      <header>
        <h4> {props.name} </h4>
        <div onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        {hover && (
          <img src={props.image2}/>
        )}
        {!hover && (
          <img src={props.image}/>
        )}
        </div>
      </header>
      <footer>
      <p>
        {props.description}
      </p>
      <Link to={`/products/${props.id}`}>  <button type="button" className="customize">Customize</button> </Link>
      </footer>
    </article>


  );
}