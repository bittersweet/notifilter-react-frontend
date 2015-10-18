import React from 'react';

var EventSelect = React.createClass({
  updateEvent: function(event) {
    event.preventDefault();
    const eventName = this.refs.eventName.value;
    const { actions } = this.props;
    actions.updateEventName(eventName);
  },

  render: function() {
    const { actions, eventName } = this.props;
    const eventNames = window.options.eventNames.map(function(eventName, i) {
      return (
        <option key={i} value={eventName}>{eventName}</option>
      );
    });

    return (
      <select ref="eventName" value={eventName} onChange={this.updateEvent}>
        {eventNames}
      </select>
    );
  }
});

module.exports = EventSelect;
