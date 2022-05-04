import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
function App() {
  return (
    <BrowserRouter forceRefresh>
      <div class="App">
        <Header />
      </div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">profile</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;