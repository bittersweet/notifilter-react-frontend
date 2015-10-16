/*
 * action types
 */

export const ADD_RULE = 'ADD_RULE';
export const REMOVE_RULE = 'REMOVE_RULE';
export const UPDATE_TEMPLATE = 'UPDATE_TEMPLATE';

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

export function updateTemplate(template) {
  return { type: UPDATE_TEMPLATE, template: template };
}
