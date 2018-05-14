import React,{ Component } from 'react';
import Child from './Child';

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
export default Parent;