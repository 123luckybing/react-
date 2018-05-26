import React, { Component } from 'react';
class ToggleButton extends Component {
  constructor() {
    super();
    this.state = {
      isToggle : 'true',
    }
    this.toggle = this.toggle.bind(this);
  }

  //按钮状态切换
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
export default ToggleButton;