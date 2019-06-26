import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, AddDate } from 'reducers';
import * as serviceWorker from './serviceWorker';

import App from './App';

const allStoreEnchancers = compose(
  applyMiddleware(thunk),
  composeWithDevTools(),
);

const allReducers = combineReducers({ rootReducer, AddDate });

const store = createStore(allReducers, allStoreEnchancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
