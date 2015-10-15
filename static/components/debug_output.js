import React from 'react';

import store from './../store';

var DebugOutput = React.createClass({
  render: function() {
    console.log('state from debug', store.getState());
    var text = JSON.stringify(store.getState());
    console.log('text: ', text);
    return (
      <div>
        <textarea ref="rulesOutput" rows="10" cols="60" defaultValue={text} />
      </div>
    );
  }
});

module.exports = DebugOutput;
