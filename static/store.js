import { createStore } from 'redux';

function counter(state = [], action) {
  switch (action.type) {
  case 'UPDATE_RULE':
  var newArr = [state];
  newArr[action.index] = action.rule;
  return newArr;
  return [...state, action.rule];
  default:
    return state;
  }
}

let store = createStore(counter);
store.subscribe(() =>
  console.log('subscribe', store.getState())
);

module.exports = store;
