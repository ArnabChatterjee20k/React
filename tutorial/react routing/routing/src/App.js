import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <li>
            <Link to="/hlw">Go to hlw</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/user/arnab">Profile</Link>
          </li>
        </nav>

        <Route  path="/hlw"  exact>
          <h3>Hwlo</h3>
        </Route>

        <Route  path="/" exact>
          <h3>Home</h3>
        </Route>
      </div>

      {/* Dynamic path */}
      <Route path="/user/:username" exact>
        <User />
      </Route>
    </BrowserRouter>
  )
};

export default App;