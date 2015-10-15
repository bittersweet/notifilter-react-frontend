import React from 'react';

var AddRule = React.createClass({
  render: function() {
    return (
      <div>
        <a href="#" onClick={() => this.props.onAddRule('test')}>Add Rule</a>
      </div>
    );
  }
});

module.exports = AddRule;
