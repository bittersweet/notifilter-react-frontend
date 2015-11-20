import React from 'react';

import store from './../store';

var DebugOutput = React.createClass({
  render: function() {
    const { rows, className, rules, preview } = this.props;
    if (rules) {
      var text = JSON.stringify(rules, null, 2);
    } else {
      // no preprocessing needed
      var text = preview;
    }
    return (
      <div className={className}>
        <textarea readOnly={'true'} rows={rows} value={text} disabled />
      </div>
    );
  }
});

module.exports = DebugOutput;
