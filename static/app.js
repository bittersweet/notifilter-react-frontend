import React from 'react';

import { connect } from 'react-redux';

import NotificationTemplate from './components/notification_template';
import DebugOutput from './components/debug_output';
import RuleForm from './components/rule_form';
import AddRule from './components/add_rule';
import SubmitButton from './components/submit_button';
import ApplicationSelect from './components/application_select';
import EventSelect from './components/event_select';
import TargetField from './components/target_field';

import { bindActionCreators } from 'redux';
import * as RuleActions from './actions';

var App = React.createClass({
  render: function() {
    console.log('PROPS IN APP', this.props);

    const { dispatch, template, rules, application, eventName, target, template } = this.props;
    const actions = bindActionCreators(RuleActions, dispatch);

    if (Object.keys(rules).length == 0) {
      var ruleElements = null;
    } else {
      var ruleElements = rules.map(function(rule, i) {
        return (
          <RuleForm key={i} rule={rule} index={i} actions={actions} />
        )
      });
    }

    return (
      <div>
        <ApplicationSelect application={application} actions={actions} />
        <EventSelect eventName={eventName} actions={actions} />
        <TargetField target={target} actions={actions} />
        <NotificationTemplate template={template} actions={actions} />
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
