import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import { Error } from './components/Error';

import { useState } from "react";
import { Redirect } from 'react-router-dom';
function App() {
  const [log, setlog] = useState(false)

  return (
    <BrowserRouter>
      <div class="App">
        <Header />
        <button onClick={()=>setlog(!log)}>{log?"Logout":"login"}</button>
      </div>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* protected route */}
      <li>
        <Link to="/profile/:1245">profile</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about">
          <About log={log}/>
        </Route>
        <Route path="/profile/:id">
          {log?<Profile/>:<Redirect to="/"/>}
        </Route>

        {/* it will be shown if the page not exists */}
        <Route component={Error}/>
      </Switch>
    </BrowserRouter>
  )
}
export default App;