import React, { Component } from 'react';
class BoilingVerdict extends Component {
  render() {
    let a;
    const temperature = this.props.temperature;
    if(temperature > 0 && temperature < 100) {
       a = "水正在烧";
    } else if ( temperature <= 0 ) {
       a = "水结冰了";
    } else {
       a = "水烧开了";
    }
    return(
      <div>水的状态是:{a}</div>
    )
  }
}
export default BoilingVerdict;
