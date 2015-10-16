import React from 'react';

import store from './../store';

var NotificationTemplate = React.createClass({
  handleChange: function(event) {
    event.preventDefault();
    var template = this.refs.template.value;
    // TODO: probably can simplify this as its duplicated with the function
    // defined in actions.js
    store.dispatch({ type: 'UPDATE_TEMPLATE', template: template });
  },

  render: function() {
    const { template } = this.props;

    return (
      <div className="rule">
        <textarea value={template} rows="5" ref="template" onChange={this.handleChange}>
       </textarea>
      </div>
    );
  }
});

module.exports = NotificationTemplate;
