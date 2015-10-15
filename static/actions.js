/*
 * action types
 */

export const ADD_RULE = 'ADD_RULE';
export const REMOVE_RULE = 'REMOVE_RULE';

/*
 * other constants
 */

/*
 * action creators
 */

export function addRule() {
  return { type: ADD_RULE };
}

export function removeRule(index) {
  return { type: REMOVE_RULE, index: index };
}
