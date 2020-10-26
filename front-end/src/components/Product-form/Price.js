import React, { useState, useEffect } from "react";


export default function Product({price, optionPrice}) {
  
  return (
  <h1>{price + optionPrice()}</h1>
  )}