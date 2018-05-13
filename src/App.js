import React, { Component } from 'react';
import './App.css'; 

import {  BrowserRouter as Router,Route,Link, hashHistory} from 'react-router-dom';
class Child extends Component {
  render() {
    return(
      <div style={{'marginTop':'20px','marginLeft':'160px'}}>
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
        <div style={{'marginTop':'10px'}}>思路：父组件给子组件传值，在父组件中引入子组件，子组件通过this.prop取值</div>
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
        <div style={{'marginTop': '20px'}}>思路：组件只更新必要的部分，其他没做改变的部分不会更新。先声明this.state.time，把定时器写进constructor里，利用this.setState每秒更新time</div>
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
        <div style={{'marginTop':'10px'}}>思路：调用多次子组件，每次传不同的值，进行渲染</div>
      </div>
    )
  }
}
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
class ToggleButton extends Component {
  constructor() {
    super();
    this.state = {
      isToggle : 'true',
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isToggle: !this.state.isToggle,
    });
  }
  render() {
    return(
      <div>
        <div>思路:给按钮绑定点击事件，通过点击事件来改变this.state.isToggle的值，同时通过 this.state.isToggle ? 'ON':'OFF' 来改变button里面的值</div>
        <button onClick={this.toggle}> { this.state.isToggle ? 'ON':'OFF' }</button>
      </div>
    )
  }
}
class TransmissionParameters extends Component {
  constructor() {
    super();
    this.state = {
      name: 'zhangsan',
    }
    this.alertName = this.alertName.bind(this,this.state.name);
  }
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
class And extends Component {
  render() {
    const message = ["hello","this","is","a","bird"];
    return(
     <div>
     <div>hello</div>
     {
      message.length>0 && <h6>您有{message.length}条消息未读</h6>
     }
     </div>
    )
  }
}
class TernaryOperator extends Component {
  constuctor() {
    
  }
  render() {
    return(
      <div>
        <div>根据this.state.isLogin的不同的值、运用三目运算符来切换组件。当isLogin的值为true的时候，显示login组件，当isLogin的值为false的时候，显示logout组件，</div>
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
            <p><Link to='/LifecycleComponent'>生命周期</Link></p>
            <p><Link to='/PreventDefault'>阻止默认行为</Link></p>
            <p><Link to='/ToggleButton'>切换按钮</Link></p>
            <p><Link to='/TransmissionParameters'>函数传参</Link></p>
            <p><Link to='/And'>与运算符</Link></p>
            <p><Link to='/TernaryOperator'>三目运算符</Link></p>
            <div className="content">
              <Route path="/HelloWorld" component={HelloWorld}></Route>
              <Route path="/JSX" component={JSX}></Route>
              <Route path='/IsLogin' component={IsLogin}></Route>
              <Route path='/JSXNest' component={JSXNest}></Route>
              <Route path='/ComponentUpdate' component={ComponentUpdate}></Route>
              <Route path='/Parent' component={Parent}></Route>
              <Route path='/GroupComponent' component={GroupComponent}></Route>
              <Route path='/LifecycleComponent' component={LifecycleComponent}></Route>
              <Route path='/PreventDefault' component={PreventDefault}></Route>
              <Route path='/ToggleButton' component={ToggleButton}></Route>
              <Route path='/TransmissionParameters' component={TransmissionParameters}></Route>
              <Route path='/And' component={And}></Route>
              <Route path='/TernaryOperator' component={TernaryOperator}></Route>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;