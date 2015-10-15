/*
 * action types
 */

export const ADD_RULE = 'ADD_RULE';

/*
 * other constants
 */

/*
 * action creators
 */

export function addRule(text) {
  return { type: ADD_RULE, text };
}
