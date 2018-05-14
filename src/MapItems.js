import React, { Component } from 'react';
class MapItems extends Component {
  render() {
    const numArr = this.props.value;
    const numItems = numArr.map(elem => 
      <li key={elem}>{elem}</li>
    );
    return(
      <ul>{numItems}</ul>
    )
  }
}
export default MapItems;