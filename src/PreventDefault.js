import React, { Component } from 'react';
class PreventDefault extends Component {
  constructor() {
    super();
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    e.preventDefault();
    //阻止浏览器默认行为e.preventDefault();
    console.log('The link was clicked.');
  }
  render() {
    return(
      <div>
        <div>组织浏览器默认行为 e.preventDefault。点击按钮不跳转，控制台输出The link was clicked.</div>
        <a href="www.baidu.com" onClick = {this.handle}>百度</a>
      </div>
    )
  }
}
export default PreventDefault;