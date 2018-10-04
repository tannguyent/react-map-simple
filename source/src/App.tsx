


import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Login from './container/login/login';
import Register from './container/register/register';

import Property from "./pages/property";
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/login">login</Link></li>
              <li><Link to="/register">register</Link></li>
              <li><Link to="/property">property</Link></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/property" component={Property} />
        </Switch>
      </div>
    );
  }
}

export default App;
