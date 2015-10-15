import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';

store.dispatch({ type: 'ADD_RULE', index: 0, rule: {name: 'mark1'} });
store.dispatch({ type: 'ADD_RULE', index: 1, rule: {name: 'mark123'} });
store.dispatch({ type: 'ADD_RULE', index: 2, rule: {name: 'mark456'} });

import DebugOutput from './components/debug_output';
import RuleForm from './components/rule_form';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <DebugOutput />
        <RuleForm />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
