import { createStore } from 'redux';

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
    return Object.assign({}, state, {
      rules: [...state.rules, {
        key: '',
        type: '',
        setting: '',
        value: '',
      }]
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

  default:
    console.log("default state", state);
    return state;
  }
}

let store = createStore(notifier, window.notifier);
store.subscribe(() =>
  console.log('subscribe', store.getState())
);

module.exports = store;
