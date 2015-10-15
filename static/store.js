import { createStore } from 'redux';

function counter(state = [], action) {
  switch (action.type) {
  case 'UPDATE_RULE':
    return Object.assign({}, state, { [action.index]: action.rule });
  default:
    return state;
  }
}

let store = createStore(counter);
store.subscribe(() =>
  console.log('subscribe', store.getState())
);

module.exports = store;
