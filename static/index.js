import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

store.dispatch({ type: 'UPDATE_RULE', index: 0, rule: {name: 'mark1'} });
store.dispatch({ type: 'UPDATE_RULE', index: 1, rule: {name: 'mark123'} });
store.dispatch({ type: 'UPDATE_RULE', index: 2, rule: {name: 'mark456'} });

let rootElement = document.getElementById('content');
ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  rootElement
);
