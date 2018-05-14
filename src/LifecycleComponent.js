import React, { Component } from 'react';
class LifecycleComponent extends Component{
  componentWillMount() {
    console.log('componentWillMount');
  }
  // 挂载前
  componentDidMount() {
    console.log('componentDidMount');
  }
  //挂载后
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  //更新前
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  //更新后
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  //卸载前
  constructor() {
    super();
    this.state = {
      num: 0,
    }
    this.add = this.add.bind(this);
  }
  add() {
    this.setState({
      num : this.state.num + 1,
    });
  }
  render() {
    return(
      <div>
        <div>生命周期：console里输出相应的状态</div>
        <div>{this.state.num}</div>
        <button onClick={this.add}>点击加一</button>
      </div>
    )
  }
} 
export default LifecycleComponent;