import { createStore } from 'redux';

function counter(state = [], action) {
  switch (action.type) {
  case 'UPDATE_RULE':
    state[action.index] = action.rule;
    return state;
  default:
    return state;
  }
}

let store = createStore(counter);
// store.subscribe(() =>
//   console.log(store.getState())
// );

module.exports = store;
