import React, { Component } from 'react';
class IsLogin extends Component {
  constructor() {
    super();
    this.state ={
      isLogin: false,
      // true为已经登陆
      // false为未登陆
    }
  }
  render() {
    var content = '';
    if(this.state.isLogin) {
      var content = "您好～欢迎回来～";
    }else {
     var content = "您好！请先登录～";
    }
    return(
      <div>
        <span>
          根据返回值的不同状态，来判断用户是否已登陆，如果是已登陆状态，显示 <span className='is-login'>Hello~~欢迎回来！ </span>
          如果是未登陆状态，显示 <span className='is-login'>您好！请先登录～</span>
        </span>
        <br />
        <div className="is-login-content">{ content }</div>
      </div>
    )
  }
}
export default IsLogin;