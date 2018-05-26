import React, { Component } from 'react';
class LiftingStateUp extends Component {
  constructor() {
    super();
    this.state = {
      temperature: '',
    }
    this.newTemperature = this.newTemperature.bind(this);
  }
  
  //当输入框数据变化时
  newTemperature(e) {
    this.setState({
      temperature: e.target.value,
    });
  }

  render() {
    var a = '';
    if( Number(this.state.temperature) >100) {
      var a = "水烧开了"
    } else if (this.state.temperature < 0) {
      var a = "水结冰了"
    } else {
      var a = "水正在烧"
    }
    return(
      <div>
        <fieldset>
          <legend>请输入温度</legend>
          <input type="text" style={{'margin':'20px'}} value={this.state.temperature} onChange = {this.newTemperature}/>
        </fieldset>
        <div>{a}</div>
      </div>
    );
  }
}
export default LiftingStateUp;