import React, { Component } from 'react';
class TransmissionParameters extends Component {
  constructor() {
    super();
    this.state = {
      name: 'zhangsan',
    }
    this.alertName = this.alertName.bind(this,this.state.name);
  }

  //弹出传入的参数
  alertName(name) {
    alert(name);
  }
  
  render() {
    return(
      <div>
        <div>当点击按钮时，触发this.alertName方法，在给this.alertName绑定this的时候，可以传入参数，然后传入的参数通过方法来进行处理。</div>
        <button onClick={this.alertName}>点出弹出姓名</button>
      </div>
    )
  }
}
export default TransmissionParameters;