import React from 'react';

import { connect } from 'react-redux';

import DebugOutput from './components/debug_output';
import RuleForm from './components/rule_form';

var App = React.createClass({
  render: function() {
    console.log('App props', this.props);
    return (
      <div>
        <DebugOutput rules={this.props.rules} />
        <RuleForm />
      </div>
    );
  }
});

// module.exports = App;

function select(state) {
  return {
    rules: state
  };
}

export default connect(select)(App);
