
import './App.css';
import Map from "./components/map/map";

import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Login from './container/login/login';
import Register from './container/register/register';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React 11111</h1>
          <nav>
            <ul>
              <li><Link to="/login">login</Link></li>
              <li><Link to="/register">register</Link></li>
            </ul>
          </nav>
        </header>
        <Map />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;
