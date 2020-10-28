import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Users from "./components/User";
import About from "./components/About";
import Product from "./components/Product-form/Products";
import Cart from "./components/Cart";
import Guide from "./components/How-to";
import Products from "./components/Products";
import Success from "./components/Success";
import "./App.css";

export default function App() {
  const [state, setState] = useState({
    products: [],
    categories: [],
    prices: [],
    options: [],
    users: [],
    order_li: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/products"),
      axios.get("/api/categories"),
      axios.get("/api/options"),
      axios.get("/api/prices"),
      axios.get("/api/users"),
      axios.get("/api/orderli"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        products: all[0].data,
        categories: all[1].data,
        options: all[2].data,
        prices: all[3].data,
        users: all[4].data,
        order_li: all[5].data,
      }));
    });
  }, []);

  function toObject(array) {
    var productsObject = {};
    for (var i = 0; i < array.length; i++) {
      productsObject[i + 1] = array[i];
    }
    return productsObject;
  }

  let productObj = toObject(state.products);



  

  return (
    <Router>
      <div className="nav-div">
        <Link to="/">
          <h1>
            <strong>Canada Blinds</strong>
          </h1>
        </Link>
        <nav className="nav-bar">
          <ul className="nav-info">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/products">
              <li>Products</li>
            </Link>
            <Link to="/guides">
              <li>Guides</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
          <ul className="user-info">
            <Link to="/users">
              <li>
                Account{" "}
                <img src="https://img.icons8.com/small/10/000000/menu.png" />
              </li>
            </Link>
            <Link to="/orderli">
              <li>
                {/* Cart{" "} */}
                <img src="https://img.icons8.com/material-two-tone/20/000000/shopping-cart-loaded.png" />
                {state["order_li"].length}
              </li>
            </Link>
          </ul>
        </nav>
      </div>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users users={state.users} />
        </Route>
        <Route path="/products/:id">
          <Product setState={setState} />
        </Route>
        <Route path="/products">
          <Products products={state.products} />
        </Route>
        <Route path="/guides">
          <Guide />
        </Route>
        <Route path="/orderli">
          <Cart users={state.users} cart={state["order_li"]} products={productObj} setState={setState} />
        </Route>
        <Route path="/ordersuccess">
          <Success/>
        </Route>
        <Route path="/">
          <Home products={state.products} />
        </Route>
      </Switch>
    </Router>
  );
}
