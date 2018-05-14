import React, { Component } from 'react';
import './App.css'; 

import {  BrowserRouter as Router,Route,Link, hashHistory} from 'react-router-dom';
import Child from './Child';
import HelloWorld from './HelloWorld';
import Parent from './Parent';
import IsLogin from './IsLogin';
import JSX from './JSX';
import JSXNest from './JSXNest';
import ComponentUpdate from './ComponentUpdate';
import GroupComponent from './GroupComponent';
import LifecycleComponent from './LifecycleComponent';
import PreventDefault from './PreventDefault';
import ToggleButton from './ToggleButton';
import TransmissionParameters from './TransmissionParameters';
import And from './And';
import Login from './Login';
import Logout from './Logout';
import TernaryOperator from './TernaryOperator';
import PreventConditionRendering from './PreventConditionRendering';
import MapArr from './MapArr';
import  MapObject from './MapObject';
import MapComponent from './MapComponent';
import Form from './Form';
import Select from './Select';
import File from './File';
import LiftingStateUp from './LiftingStateUp';
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
            <p><Link to='/PreventConditionRendering'>阻止条件渲染</Link></p>
            <p><Link to='/MapArr'>map循环数组</Link></p>
            <p><Link to='/MapObject'>map数组对象</Link></p>
            <p><Link to='/MapComponent'>map循环组件</Link></p>
            <p><Link to='/Form'>表单</Link></p>
            <p><Link to='/Select'>下拉菜单</Link></p>
            <p><Link to='/File'>上传文件</Link></p>
            <p><Link to='/LiftingStateUp'>状态提升</Link></p>
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
              <Route path='/PreventConditionRendering' component={PreventConditionRendering}></Route>
              <Route path='/MapArr' component={MapArr}></Route>
              <Route path='/MapObject' component={MapObject}></Route>
              <Route path='/MapComponent' component={MapComponent}></Route>
              <Route path='/Form' component={Form}></Route>
              <Route path='/Select' component={Select}></Route>
              <Route path='/File' component={File}></Route>
              <Route path='/LiftingStateUp' component={LiftingStateUp}></Route>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;