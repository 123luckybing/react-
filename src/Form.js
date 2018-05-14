import React, { Component } from 'react';
class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
    this.valueChange = this.valueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
  valueChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  formSubmit(event) {
    alert('您输入的名字是:'+ this.state.value);
    event.preventDefault();
  }
  render() {
    return(
      <div>
        <form onSubmit = {this.formSubmit}>
          请输入您的姓名:
          <input type="text" defaultValue={this.state.value} onChange={this.valueChange}/>
          <input type="submit" />
        </form>
        <div>附：textarea与 &lt;input type="text"&gt;用法啊一样～就不详细说明啦～</div>
      </div>
      // 应该把onSubmit事件绑定在form上～而不是input/submit上，否则会点击默认跳转
    )
  }
}
export default Form;