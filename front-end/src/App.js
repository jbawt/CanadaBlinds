import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Users from "./components/User";
import About from "./components/About";
import Product from "./components/Product-form/Products";
import Guide from "./components/How-to";
import "./App.css";

export default function App() {
  const [state, setState] = useState({
    products: [],
    categories: [],
    prices: [],
    options: [],
    users: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/products"),
      axios.get("/api/categories"),
      axios.get("/api/options"),
      axios.get("/api/prices"),
      axios.get("/api/users"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        products: all[0].data,
        categories: all[1].data,
        options: all[2].data,
        prices: all[3].data,
        users: all[4].data,
      }));
    });
  }, []);

  return (
    <Router>
      <div className="nav-div">
        <h1>
          <strong>Canada Blinds</strong>
        </h1>
        <nav className="nav-bar">
          <ul className="nav-info">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/product">
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
            <li>
              Cart{" "}
              <img src="https://img.icons8.com/emoji/10/000000/shopping-cart-emoji.png" />
            </li>
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
          <Product />
        </Route>
        <Route path="/guides">
          <Guide />
        </Route>
        <Route path="/">
          <Home products={state.products} />
        </Route>
      </Switch>
    </Router>
  );
}
