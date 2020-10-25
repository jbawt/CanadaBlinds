import React, {useState} from "react";
import "./ProductList.css";

export default function ProductList(props) {
  const [hover, setHover] = useState(false)
  function showProd() {

    alert('show the product');
  }
  console.log(props.image2)

  return (
    <form className = "product">
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
        <button type="button" onClick={showProd} className="customize">Customize</button>
      </footer>
    </form>
  );
}