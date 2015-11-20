import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { fetchPosts } from './actions'

function notifier(state = {template: 'templ', rules: []}, action) {
  switch (action.type) {
  case 'UPDATE_RULE':
    return Object.assign({}, state, {
      rules: [...state.rules.slice(0, action.index),
        Object.assign({}, state.rules[action.index], action.rule),
        ...state.rules.slice(action.index + 1)
      ]
    });

  case 'ADD_RULE':
    const defaultRule = {
      key: '',
      type: '',
      setting: '',
      value: '',
    };
    return Object.assign({}, state, {
      rules: [...state.rules, defaultRule]
    });

  case 'REMOVE_RULE':
    return Object.assign({}, state, {
      rules: [...state.rules.slice(0, action.index),
        ...state.rules.slice(action.index + 1)
      ]
    });

  case 'UPDATE_TEMPLATE':
    return Object.assign({}, state, {
      template: action.template
    });

  case 'UPDATE_APPLICATION':
    return Object.assign({}, state, {
      application: action.application
    });

  case 'UPDATE_EVENTNAME':
    return Object.assign({}, state, {
      eventName: action.eventName
    });

  case 'UPDATE_TARGET':
    return Object.assign({}, state, {
      target: action.target
    });

  case 'PREVIEW_TEMPLATE':
    console.log('preview template store method');
    console.log(action);
    return Object.assign({}, state, {
      preview: ''
    });

  case 'UPDATE_PREVIEW_TEMPLATE':
    console.log('update preview template method called');
    console.log(action);
    return Object.assign({}, state, {
      preview: action.preview
    });

  default:
    console.log("default state", state);
    return state;
  }
}

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
)(createStore);

const store = createStoreWithMiddleware(notifier, window.notifier);

store.subscribe(() =>
  console.log('subscribe', store.getState())
);

module.exports = store;
