import React from 'react';

import store from './../store';

var DebugOutput = React.createClass({
  render: function() {
    console.log('==== rendering DebugOutput');
    var rules = this.props.rules;
    var text = JSON.stringify(rules);
    console.log('text: ', text);
    return (
      <div>
        <textarea ref="rulesOutput" readOnly={'true'} rows="10" cols="60" value={text} />
      </div>
    );
  }
});

module.exports = DebugOutput;
