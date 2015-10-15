import React from 'react';

var RuleForm = React.createClass({
  getInitialState: function() {
    return {
      key: '',
      type: '',
      setting: '',
      value: '',
    };
  },

  updateRule: function(state) {
    var json = JSON.stringify(state);
    this.refs.rulesOutput.value = json;
  },

  handleChange: function(event) {
    var newState = {
      key: this.refs.key.value,
      type: this.refs.type.value,
      setting: this.refs.setting.value,
      value: this.refs.value.value,
    };
    this.setState(newState);
    this.updateRule(newState);
  },

  render: function() {
    var key = this.state.key;
    var type = this.state.type
    var setting = this.state.setting;
    var value = this.state.value;

    return (
      <div>
        <textarea ref="rulesOutput" rows="10" cols="60" />
        <br />
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
