import React from 'react';

var AddRule = React.createClass({
  render: function() {
    const { actions } = this.props;
    return (
      <div>
        <a href="#" onClick={actions.addRule2}>Add Rule</a>
      </div>
    );
  }
});

module.exports = AddRule;
