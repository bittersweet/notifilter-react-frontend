import React from 'react';

import fetch from 'isomorphic-fetch';

import store from './../store';

var PreviewButton = React.createClass({
  handleClick: function(event) {
    event.preventDefault();

    const { actions } = this.props;

    const { application, eventName, template } = store.getState();
    actions.fetchPreviewTemplate(application, eventName, template);
  },

  render: function() {
    return (
      <div className="submit">
        <button type="submit" onClick={this.handleClick}>
          Preview
        </button>
      </div>
    );
  }
});

module.exports = PreviewButton;
