import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist' 
import configureStore from './store'
let { store, persistor } = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>
), document.getElementById('root') as HTMLElement);

registerServiceWorker();
