import { createStore } from 'redux';

function counter(state = [], action) {
  switch (action.type) {
  case 'UPDATE_RULE':
    console.log('UPDATE_RULE', action);
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], action.rule),
      ...state.slice(action.index + 1)
    ];

  case 'ADD_RULE':
      console.log('ADD rule called', state);
      return [...state, {
        key: 'user_role',
        type: 'string',
        setting: 'noteq',
        value: 'admin',
      }];

  default:
    return state;
  }
}

let store = createStore(counter);
store.subscribe(() =>
  console.log('subscribe', store.getState())
);

module.exports = store;
