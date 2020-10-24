import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

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
    ]).then((all) => {
      setState(prev => ({...prev, products: all[0].data, categories: all[1].data, options: all[2].data, prices: all[3].data}))
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
            <Users />
          </Route>
          <Route path="/">
            <Home options = {state.options}/>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

function Home({options}) {
  // const options = props.options.map((option) => {
  //   return 
  //     key={option.id}
  //     option={option.option}
  //     price={option.price}
  //     product_id={option.product_id}    
  // })
    const price = options
    if (!options.length) {
      return null
    }
    console.log(options[1].price)
  return <h2>Home {options[1].price}</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}



