import React from 'react';

import { connect } from 'react-redux';

import NotificationTemplate from './components/notification_template';
import DebugOutput from './components/debug_output';
import RuleForm from './components/rule_form';
import AddRule from './components/add_rule';
import SubmitButton from './components/submit_button';

import { bindActionCreators } from 'redux';
import * as RuleActions from './actions';

var App = React.createClass({
  render: function() {
    console.log('PROPS IN APP', this.props);

    const { dispatch, template, rules } = this.props;
    const actions = bindActionCreators(RuleActions, dispatch);

    var ruleElements = rules.map(function(rule, i) {
      return (
        <RuleForm key={i} rule={rule} index={i} actions={actions} />
      )
    });

    return (
      <div>
        <NotificationTemplate actions={actions} />
        <DebugOutput rules={rules} />
        {ruleElements}
        <AddRule actions={actions} />
        <SubmitButton />
      </div>
    );
  }
});

function select(state) {
  return state;
}

export default connect(select)(App);
