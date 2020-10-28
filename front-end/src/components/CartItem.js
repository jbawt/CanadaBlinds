import React, { Fragment } from "react";

export default function Cart(props) {
  console.log(props);
  return (
    <Fragment>
      <tr>
        <td>{props.product.name}</td>
        <td>{props.width}"</td>
        <td>{props.height}"</td>
        <td>
          {props.motor && <p>Motor</p>} {props.cordless && <p>Cordless</p>}{" "}
          {props.remote && <p>Remote</p>}{" "}
          {props.metalBeadedChain && <p>Metal Beaded Chain</p>}{" "}
          {props.retractableCord && <p>Retractable Cord</p>}{" "}
          {props.charger && <p>Charger</p>}
        </td>
        <td>${props.price}</td>
        <td>
          <div className="button">
            <a href="#">Remove</a>
          </div>
        </td>
      </tr>
    </Fragment>
  );
}
