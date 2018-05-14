import React, { Component} from 'react';
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
export default JSXNest;