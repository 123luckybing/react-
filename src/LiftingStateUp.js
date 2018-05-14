import React, { Component } from 'react';
class LiftingStateUp extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  }
  render() {
    return(
      <div>
        <fieldset>
          <legend>请输入温度</legend>
          <input type="text" style={{'margin':'20px'}} value={this.state.temperature}/>
        </fieldset>
      </div>
    );
  }
}
export default LiftingStateUp;