import React from 'react';

var AddRule = React.createClass({
  render: function() {
    const { actions } = this.props;
    return (
      <a href='#' onClick={e => {
        e.preventDefault();
        actions.addRule();
      }}>
        Add rule
      </a>
    );
  }
});

module.exports = AddRule;
