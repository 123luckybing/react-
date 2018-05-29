import React, { Component } from 'react';
class MapArr extends Component {
  render() {
    const arr = [1,2,3,4,5];
    const arrItems = arr.map((elem,index) => 
      <li key={index}>{elem}</li>
    );
    const name = ['Lily','Nancy','Alice'];
    //arr.map( => ); 每一个需要有一个key，否则会有警告
    return(
      <div>
        <ul>{arrItems}</ul>
        <div>
          {
            name.map(function(elem) {
              return <div>Hello! {elem}</div>
            })
          }
        </div>
      </div>
    )
  }
}
export default MapArr;