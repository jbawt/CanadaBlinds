import React from "react";

export default function Home({products}) {
  if (!products.length) {
    return null
  }
  const name = products[1].name
  return <h2>Home {name}</h2>;
}