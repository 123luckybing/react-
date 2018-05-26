import React, { Component } from 'react';
import Combination from './Combination';
class Contact extends Component {
  render() {
    return(
      <div>
        <Combination left ={<Chat />} />
        {/* 组件传组件 */}
      </div>
    );
  }
}