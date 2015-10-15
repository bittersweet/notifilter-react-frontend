import React from 'react';
import ReactDOM from 'react-dom';

var RuleForm = React.createClass({
  getInitialState: function() {
    return {
      selected: 'A',
      value: 'Hello',
    };
  },

  updateRule: function() {
    console.log(this.state);
  },

  handleSelect: function(event) {
    console.log('ref', this.refs.value.value);
    var value = event.target.value;
    console.log('select', value);
    this.setState({selected: value});
    this.updateRule();
  },
  handleChange: function(event) {

    var value = event.target.value;
    console.log('value', value);
    this.setState({value: value});
    this.updateRule();
  },

  render: function() {
    var ruleOutput = 'test';
    var key = this.state.key;
    var type = this.state.type
    var setting = this.state.setting;
    var value = this.state.value;

    return (
      <div>
        <textarea defaultValue={ruleOutput} rows="10" cols="60" />
        <br />
        <select value={key} onChange={this.handleSelect}>
          <option value="active">active</option>
          <option value="user_role">user_role</option>
        </select>
        <br />
        <select value={type} onChange={this.handleSelect}>
          <option value="boolean">boolean</option>
          <option value="string">string</option>
          <option value="number">number</option>
        </select>
        <br />
        <select value={setting} onChange={this.handleSelect}>
          <option value=""></option>
          <option value="eq">eq</option>
          <option value="gt">gt</option>
          <option value="lt">lt</option>
          <option value="noteq">noteq</option>
        </select>
        <br />
        <label>Value</label>
        <input type="text" ref="value" value={value} onChange={this.handleChange} />
        <br />
      </div>
    );
  }
});

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
