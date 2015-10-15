import React from 'react';

import { connect } from 'react-redux';

import DebugOutput from './components/debug_output';
import RuleForm from './components/rule_form';
import AddRule from './components/add_rule';

import { bindActionCreators } from 'redux';
import * as RuleActions from './actions';

var App = React.createClass({
  render: function() {
    const { dispatch, rules } = this.props;
    const actions = bindActionCreators(RuleActions, dispatch);

    var ruleElements = rules.map(function(rule, i) {
      return (
        <RuleForm key={i} rule={rule} index={i}/>
      )
    });

    return (
      <div>
        <DebugOutput rules={rules} />
        {ruleElements}
        <AddRule actions={actions} />
      </div>
    );
  }
});

function select(state) {
  return {
    rules: state
  };
}

export default connect(select)(App);
