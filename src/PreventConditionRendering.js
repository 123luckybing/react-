import React, { Component } from 'react';
class PreventConditionRendering extends Component{
  render() {
    if(false) {
      var a = <h2>hahh~</h2>
    }else {
      var a = null;
    }
    return(
      <div>
        <span>在一些情况下，可能希望隐藏某个组件。实现方法:让 render 方法返回 null即可。好处是组件的 render 方法返回 null 并不会影响该组件生命周期方法的回调。</span>
        <div>{a}</div>
      </div>
    )
  }
}
export default PreventConditionRendering;