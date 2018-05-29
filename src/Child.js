import React, { Component } from 'react';

class Child extends Component {
  render() {
    console.log(this);
    return(
      <div style={{'marginTop':'20px','marginLeft':'160px'}}>
        Hello ~~{this.props.name}!
        <div>控制台console.log(this),name:zhangsan 存在props方法下面</div>
      </div>
    )
  }
}
export default Child;