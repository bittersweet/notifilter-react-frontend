import React from 'react';

import store from './../store';

var DebugOutput = React.createClass({
  render: function() {
    const { rules, preview } = this.props;
    if (rules) {
      var text = JSON.stringify(rules, null, 2);
    } else {
      // no preprocessing needed
      var text = preview;
    }
    return (
      <div>
        <textarea readOnly={'true'} rows="15" cols="60" value={text} disabled />
      </div>
    );
  }
});

module.exports = DebugOutput;
