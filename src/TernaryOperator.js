import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
class TernaryOperator extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
    }
  }
  render() {
    return(
      <div>
        <div>根据this.state.isLogin的不同的值、运用三目运算符来切换组件。当isLogin的值为true的时候，显示login组件，当isLogin的值为false的时候，显示logout组件。</div>
        <div className='is-logout'>{this.state.isLogin? <Login /> : <Logout/>}</div>
      </div>
    )
  }
}
export default TernaryOperator;