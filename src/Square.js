import React, { Component } from 'react';
class Square extends Component {
  constructor() {
    super();
    this.btnClick = this.btnClick.bind(this);
  }
  btnClick(i) {
    this.props.btClick();
  }
  render() {
    return (
      <button className="square"
        onClick = {this.btnClick}
      >
        {this.props.value}
      </button>
    );
  }
  }
export default Square;