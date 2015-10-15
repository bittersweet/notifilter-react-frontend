import React from 'react';

var RemoveRule = React.createClass({
  handleClick: function(event) {
    console.log('Clicked;');
    // store.dispatch({ type: 'UPDATE_RULE', index: this.props.index, rule: rule });
  },

  render: function() {
    const { actions, index } = this.props;
    return (
      <a className="removeRule" href='#' onClick={e => {
        e.preventDefault();
        actions.removeRule(index);
      }}>
        x
      </a>
    );
  }
});

module.exports = RemoveRule;
