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
    console.log('TEmplate', template);

    return (
      <div className="rule">
        <label htmlFor="template">Template</label>
        <textarea id="template" value={template} rows="5" ref="template" onChange={this.handleChange}>
        </textarea>
      </div>
    );
  }
});

module.exports = NotificationTemplate;
