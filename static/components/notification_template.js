import React from 'react';

import store from './../store';

var NotificationTemplate = React.createClass({
  handleChange: function(event) {
    event.preventDefault();
    const template = this.refs.template.value;
    const { actions } = this.props;
    actions.updateTemplate(template);
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
