import React, { Component } from 'react';
class ProductRow extends Component {
  render() {
    const name = 
    this.props.elem.stocked ? 
    // 本身就是true和false 不用判断=== true
    this.props.elem.name:
    <span style={{color:'red'}}>
      {this.props.elem.name}
    </span>
    return(
      <div>
        <tr>
          <td>{name}</td>&nbsp;&nbsp;
          <td>{this.props.elem.price}</td>
        </tr>
      </div>
    )
  }
}
export default ProductRow;