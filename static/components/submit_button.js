import React from 'react';

import fetch from 'isomorphic-fetch';

// TODO: Find out best way to receive this from parent for better data flow
import store from './../store';

var SubmitButton = React.createClass({
  handleClick: function(event) {
    event.preventDefault();

    console.log('state at time of submit is: ', store.getState());

    const { application, eventName, target, template, rules } = store.getState();

    var id = window.notifier.id;
    var url = `http://localhost:3002/receive/${id}.json`;
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        notifier: {
          application: application,
          event_name: eventName,
          target: target,
          template: template,
          rules: rules,
        }
      })
    })
      .then(response => response.json()) // can be removed?
      .then(json => console.log(json))
      .catch(exception => console.log('POST failed:', exception));
  },

  render: function() {
    return (
      <div className="submit">
        <button type="submit" onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
});

module.exports = SubmitButton;
