import React, { Component } from 'react';
class MapArr extends Component {
  render() {
    const arr = [1,2,3,4,5];
    const arrItems = arr.map((elem,index) => 
      <li key={index}>{elem}</li>
    );
    //arr.map( => ); 每一个需要有一个key，否则会有警告
    return(
      <ul>{arrItems}</ul>
    )
  }
}
export default MapArr;