import React from 'react';

import { connect } from 'react-redux';

import DebugOutput from './components/debug_output';
import RuleForm from './components/rule_form';

var App = React.createClass({
  render: function() {
    const { dispatch, rules } = this.props;

    var ruleElements = rules.map(function(rule, i) {
      return (
        <RuleForm rule={rule} index={i}/>
      )
    });
    console.log('App props', rules);
    return (
      <div>
        <DebugOutput rules={rules} />
        {ruleElements}
      </div>
    );
  }
});

function select(state) {
  console.log('select state');
  return {
    rules: state
  };
}

export default connect(select)(App);
