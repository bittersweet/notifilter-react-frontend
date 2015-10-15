import { createStore } from 'redux';

function rules(state = [], action) {
  switch (action.type) {
  case 'UPDATE_RULE':
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], action.rule),
      ...state.slice(action.index + 1)
    ];

  case 'ADD_RULE':
      return [...state, {
        key: '',
        type: '',
        setting: '',
        value: '',
      }];

  case 'REMOVE_RULE':
    return [
      ...state.slice(0, action.index),
      ...state.slice(action.index + 1)
    ];

  default:
    return state;
  }
}

console.log('Initial rules:', window.RULES);

let store = createStore(rules, window.RULES);
store.subscribe(() =>
  console.log('subscribe', store.getState())
);

module.exports = store;
