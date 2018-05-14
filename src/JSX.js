import React, { Component } from 'react';
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
export default JSX;