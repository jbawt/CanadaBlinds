import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Product() {
  const [state, setState] = useState({
    product:[],
    prices:[],
    options:[]
  })

  const {id} = useParams()
  const url = `/api/products/${id}`
  useEffect(() => {
  axios.get(url)
  .then((data) =>{
    console.log(data.data);
    setState((prev) => ({
      ...prev,
      product: data.data.product,
      prices: data.data.prices,
      options: data.data.options
    }));
  })
}, []);


  return (
    <body>
      <h2>Hello {state.product.name}</h2>
    </body>
  )
}