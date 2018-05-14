import React, { Component } from 'react';
class ComponentUpdate extends Component {
  constructor() {
    super();
    this.state={
      time:new Date(),
    }
    setInterval( () => {
      this.setState({
        time: new Date(),
      })
    },1000);
    //setInterval写进constructor里面
  }
  render() {
    const time = (
      <div>
        <span>现在时间是：</span>
        <span>{this.state.time.toLocaleTimeString()}</span><br/>
        <div style={{'marginTop': '20px'}}>思路：组件只更新必要的部分，其他没做改变的部分不会更新。先声明this.state.time，把定时器写进constructor里，利用this.setState每秒更新time</div>
      </div>
      );
    return(
      <div>{time}</div>
    );
  }
 }
 export default ComponentUpdate;