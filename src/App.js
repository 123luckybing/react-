import React, { Component } from 'react';
import './App.css'; 

import {  BrowserRouter as Router,Route,Link, hashHistory} from 'react-router-dom';
class Child extends Component {
  render() {
    return(
      <div style={{'margin-top':'20px','margin-left':'160px'}}>
        Hello ~~{this.props.name}!
      </div>
    )
  }
}
class Parent extends Component {
  render() {
    return(
      <div>
        <Child name="zhangsan"/>
        <div style={{'margin-top':'10px'}}>思路：父组件给子组件传值，在父组件中引入子组件，子组件通过this.prop取值</div>
      </div>
    );
  }
}
class HelloWorld extends Component { 
  render() {
    return(
      <div>Hello World!</div>
    )
  }
}
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
class JSX extends Component {
  render() {
    function nameMatch(user) {
      return user.firstName + '' + user.lastName ;
    }
    //render里可以写function
    const element = <h1>Hello World</h1>;
    const user = {
      firstName: 'zhou',
      lastName: 'fangbing'
    }
    const name = (
      <h1>Hello~{ nameMatch(user) }</h1>
    );
    // 里面含有标签时使用括号,与return（）相同
    return(
      <div>
        <span>{element}</span>
        <span>{name}</span>
      </div>
    )
  }
}
class JSXNest extends Component {
  render() {
    const element = (
      <div>
        <h4>Hello ！</h4>
        <h5>Good to see you here~</h5>
      </div>
    )
     //括号嵌套
    return(
      <div>
        {element}
      </div>
    )
  }
}
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
        <div style={{'margin-top': '20px'}}>思路：组件只更新必要的部分，其他没做改变的部分不会更新。先声明this.state.time，把定时器写进constructor里，利用this.setState每秒更新time</div>
      </div>
      );
    return(
      <div>{time}</div>
    );
  }
 }
class GroupComponent extends Component {
  render() {
    return(
      <div>
        <Child name='章三'/>
        <Child name='李四'/>
        <Child name='王五'/>
        <div style={{'margin-top':'10px'}}>思路：调用多次子组件，每次传不同的值，进行渲染</div>
      </div>
    )
  }
}
 class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className='wrapper'>
            <p><Link to='/HelloWorld'>Hello World</Link></p>
            <p><Link to='/JSX'>JSX</Link></p>
            <p><Link to='/IsLogin'>IsLogin</Link></p>
            <p><Link to='/JSXNest'>JSX嵌套</Link></p>
            <p><Link to='/ComponentUpdate'>组件更新</Link></p>
            <p><Link to='/Parent'>组件传值</Link></p>
            <p><Link to='/GroupComponent'>组合组件</Link></p>
            <div className="content">
              <Route path="/HelloWorld" component={HelloWorld}></Route>
              <Route path="/JSX" component={JSX}></Route>
              <Route path='/IsLogin' component={IsLogin}></Route>
              <Route path='/JSXNest' component={JSXNest}></Route>
              <Route path='/ComponentUpdate' component={ComponentUpdate}></Route>
              <Route path='/Parent' component={Parent}></Route>
              <Route path='/GroupComponent' component={GroupComponent}></Route>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;