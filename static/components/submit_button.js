import React from 'react';

// TODO: Find out best way to receive this from parent for better data flow
import store from './../store';

var SubmitButton = React.createClass({
  handleClick: function(event) {
    console.log('Clicked submit button');

    console.log('state at time of submit is: ', store.getState());

  },

  render: function() {
    const { actions, index } = this.props;
    return (
      <div className="submit">
        <button type="submit" onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
});

module.exports = SubmitButton;
