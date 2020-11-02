import React, { Fragment } from "react";
import axios from "axios"


export default function Cart(props) {


  const deleteFn = () => {
    return axios
      .delete(`/api/orderli`, { data: { id: props.id } })
      .then((response) => {
        axios.get(`/api/orderli`).then((res) => {
          props.setState((prev) => {
            return {
              ...prev,
              order_li: res.data,
            }
          })
        })
      })
      .catch((error) => console.log(error));
  }

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
        <td>${props.price.toFixed(2)}</td>
        <td>
          <div className="button" onClick={() => deleteFn()} >
            <p>Remove</p>
          </div>
        </td>
      </tr>
    </Fragment>
  );
}
