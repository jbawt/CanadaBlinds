import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import Home from './components/Home';
import Users from './components/User';
import About from './components/About';

export default function App() {
  
  const [state, setState] = useState({
    products: [],
    categories: [],
    prices: [],
    options: []
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/products'),
      axios.get('/api/categories'),
      axios.get('/api/options'),
      axios.get('/api/prices'),
      axios.get('/api/users'),
    ]).then((all) => {
      setState(prev => ({...prev, products: all[0].data, categories: all[1].data, options: all[2].data, prices: all[3].data, users: all[4].data}))
    })
  }, [])
  console.log(state.options)

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users users = {state.users} />
          </Route>
          <Route path="/">
            <Home products = {state.products}/>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}




