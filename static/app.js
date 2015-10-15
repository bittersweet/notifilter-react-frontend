import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';

store.dispatch({ type: 'ADD_RULE', index: 1, rule: {name: 'mark1'} });
store.dispatch({ type: 'ADD_RULE', index: 2, rule: {name: 'mark123'} });
store.dispatch({ type: 'ADD_RULE', index: 3, rule: {name: 'mark456'} });

import RuleForm from './components/rule_form';

var App = React.createClass({
  render: function() {
    return (
      <RuleForm />
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
