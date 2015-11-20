import fetch from 'isomorphic-fetch';

/*
 * action types
 */

export const ADD_RULE = 'ADD_RULE';
export const REMOVE_RULE = 'REMOVE_RULE';
export const UPDATE_TEMPLATE = 'UPDATE_TEMPLATE';
export const UPDATE_APPLICATION = 'UPDATE_APPLICATION';
export const UPDATE_EVENTNAME = 'UPDATE_EVENTNAME';
export const UPDATE_TARGET = 'UPDATE_TARGET';
export const PREVIEW_TEMPLATE = 'PREVIEW_TEMPLATE';
export const UPDATE_PREVIEW_TEMPLATE = 'UPDATE_PREVIEW_TEMPLATE';
// TODO -- figure out how this stuff works, lol.

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

export function updateApplication(application) {
  return { type: UPDATE_APPLICATION, application: application };
}

export function updateEventName(eventName) {
  return { type: UPDATE_EVENTNAME, eventName: eventName };
}

export function updateTarget(target) {
  return { type: UPDATE_TARGET, target: target };
}

export function updatePreviewTemplate(preview) {
  console.log('updatePreviewTemplate called with', preview);
  return { type: UPDATE_PREVIEW_TEMPLATE, preview: preview }
}

export function fetchPosts(application, eventName, template) {
  console.log('first', application, eventName, template);
  return function(dispatch) {
    console.log('second', application, eventName, template);
    //dispatch(updatePreviewTemplate(obj))

    const payload = JSON.stringify({
      application: application,
      event_name: eventName,
      template: template,
    });
    console.log("POSTING ", payload);
    const url = '/notifiers/preview.json';
    return fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: payload
    })
      .then(response => response.json())
      .then(json =>
          console.log(json)
      )
      .catch(exception => {
        console.log('POST to preview failed:', exception)
      });
  }
}

export function fetchPreviewTemplate(application, eventName, template) {
  const url = '/notifiers/preview.json';
  fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      application: application,
      event_name: eventName,
      template: template,
    })
  })
    .then(response => response.json())
    .then(function(json) {
        console.log(json);
        console.log(json.result);
        updatePreviewTemplate(json.result);

        return { type: UPDATE_PREVIEW_TEMPLATE, preview: json.result }
    })
    .catch(exception => {
      console.log('POST to preview failed:', exception)
    })
  // return { type: PREVIEW_TEMPLATE, application: application, eventName: eventName, template: template };
}
