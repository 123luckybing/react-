import React, { Component } from 'react';
class ProductCategoryRow extends Component {
  render() {
    return(
      <tr>
        <td style={{fontSize: '20px',fontWeight:'400'}}>{this.props.category}</td>
      </tr>
    )
  }
}
export default ProductCategoryRow;