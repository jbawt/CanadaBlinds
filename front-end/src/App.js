import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Users from "./components/User";
import About from "./components/About";
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
        <nav className="nav-bar">
          <h1>
            <strong>Canada Blinds</strong>
          </h1>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/users">
              <li>Users</li>
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
        <Route path="/">
          <Home products={state.products} />
        </Route>
      </Switch>
    </Router>
  );
}
