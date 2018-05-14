import React, { Component } from 'react';
class Select extends Component {
  constructor() {
    super();
    this.state = {
      value: '足球',
    }
    this.valueChange = this.valueChange.bind(this);
    this.handleValue = this.handleValue.bind(this);
  }
  handleValue (e) {
    e.preventDefault();
    alert("您选择的爱好是:" + this.state.value);
  }
  valueChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  render() {
    return(
      <div>
        <form action="" onSubmit = {this.handleValue}>
          请选择您的爱好:
          <select value={this.state.value} onChange={this.valueChange}>
            <option value="足球">足球</option>
            <option value="篮球">篮球</option>
            <option value="排球">排球</option>
            <option value="羽毛球">羽毛球</option>
            {/* 必须写value，否则值不会变 */}
          </select>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
export default Select;