import React, { Component } from 'react';

class Child extends Component {
  render() {
    return(
      <div style={{'marginTop':'20px','marginLeft':'160px'}}>
        Hello ~~{this.props.name}!
      </div>
    )
  }
}
export default Child;