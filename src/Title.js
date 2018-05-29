import React, { Component } from 'react';
class Title extends Component {
  render() {
    return(
      <div className='title-wrapper'>
        <div className="mationTitle">姓名</div>
        <div className="mationTitle">性别</div>
        <div className="mationTitle">电子邮箱</div>
      </div>
    )
  }
}
export default Title;