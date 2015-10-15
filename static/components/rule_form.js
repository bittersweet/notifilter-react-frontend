import React from 'react';

import store from './../store';

var RuleForm = React.createClass({
  getInitialState: function() {
    return {
      key: '',
      type: '',
      setting: '',
      value: '',
    };
  },

  handleChange: function(event) {
    console.log('handleChange!');
    var newState = {
      key: this.refs.key.value,
      type: this.refs.type.value,
      setting: this.refs.setting.value,
      value: this.refs.value.value,
    };
    var rule = newState;
    store.dispatch({ type: 'UPDATE_RULE', index: 3, rule: rule });

    this.setState(newState);
  },

  render: function() {
    var key = this.state.key;
    var type = this.state.type
    var setting = this.state.setting;
    var value = this.state.value;

    return (
      <div>
        <select ref="key" value={key} onChange={this.handleChange}>
          <option value="active">active</option>
          <option value="user_role">user_role</option>
        </select>
        <br />
        <select ref="type" value={type} onChange={this.handleChange}>
          <option value="boolean">boolean</option>
          <option value="string">string</option>
          <option value="number">number</option>
        </select>
        <br />
        <select ref="setting" value={setting} onChange={this.handleChange}>
          <option value=""></option>
          <option value="eq">eq</option>
          <option value="gt">gt</option>
          <option value="lt">lt</option>
          <option value="noteq">noteq</option>
        </select>
        <br />
        <input type="text" ref="value" value={value} onChange={this.handleChange} placeholder="Value" />
        <br />
      </div>
    );
  }
});

module.exports = RuleForm;
