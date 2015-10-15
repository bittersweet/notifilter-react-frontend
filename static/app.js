import React from 'react';
import ReactDOM from 'react-dom';

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
