import React from 'react';

import store from './../store';

var DebugOutput = React.createClass({
  render: function() {
    var rules = this.props.rules;
    var text = JSON.stringify(rules);
    console.log('text: ', text);
    return (
      <div>
        <textarea ref="rulesOutput" rows="10" cols="60" defaultValue={text} />
      </div>
    );
  }
});

module.exports = DebugOutput;
