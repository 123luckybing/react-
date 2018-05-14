import React, { Component } from 'react';
class MapObject extends Component {
  render() {
    const obj = [{
      id: '001',
      content: '我是001,收到请回答'
    },{
      id: '002',
      content: '我是002,收到请回答'
    },{
      id: '003',
      content: '我是003,收到请回答'
    }];
    const objItems = obj.map(elem => 
      <li key={elem.id}>{elem.content}</li>
    );
    return(
      <div>{objItems}</div>
    )
  }
}
export default MapObject;