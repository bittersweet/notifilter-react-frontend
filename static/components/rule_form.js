import React from 'react';

import store from './../store';

var RuleForm = React.createClass({
  handleChange: function(event) {
    var rule = {
      key: this.refs.key.value,
      type: this.refs.type.value,
      setting: this.refs.setting.value,
      value: this.refs.value.value,
    };
    store.dispatch({ type: 'UPDATE_RULE', index: this.props.index, rule: rule });
  },

  render: function() {
    const { key, type, setting, value } = this.props.rule;

    return (
      <div className="rule">
        <select ref="key" value={key} onChange={this.handleChange}>
          <option value="active">active</option>
          <option value="user_role">user_role</option>
        </select>

        <select ref="type" value={type} onChange={this.handleChange}>
          <option value="boolean">boolean</option>
          <option value="string">string</option>
          <option value="number">number</option>
        </select>

        <select ref="setting" value={setting} onChange={this.handleChange}>
          <option value=""></option>
          <option value="eq">eq</option>
          <option value="gt">gt</option>
          <option value="lt">lt</option>
          <option value="noteq">noteq</option>
        </select>

        <input type="text" ref="value" value={value} onChange={this.handleChange} placeholder="Value" />
      </div>
    );
  }
});

module.exports = RuleForm;
