import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

var rule = {
  key: 'user_role',
  type: 'string',
  setting: 'noteq',
  value: 'admin',
};

let rootElement = document.getElementById('content');
ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  rootElement
);
