import React,{ Component } from 'react';
import Child from './Child';
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
export default GroupComponent;