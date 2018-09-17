
import './App.css';
import Map from "./components/map/map";

import * as React from 'react';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React 11111</h1>
        </header>
        <Map/>
      </div>
    );
  }
}

export default App;
