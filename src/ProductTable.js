import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
class ProductTable extends Component {
  render() {
    const row = [];
    var lastCategory = null;
    const productList = this.props.produces;
    productList.map((elem,index) => {
      if(elem.name.indexOf(this.props.text)==-1||(this.props.checked && !elem.stocked)) {
        return;
      }
      //当勾选框选中，stocked为false的一栏消失 不包含输入框中的名字内容也消失
      if(elem.category !== lastCategory) {
        row.push(<ProductCategoryRow category = {elem.category} key={elem.category}/>);
        // 提取每一个对象的category,所以category必须是唯一的～key={elem.category}
      }
      row.push(<ProductRow elem={elem} key={elem.name}/>);
      lastCategory = elem.category;
      // lastCategory 设置的目的是去重
    });
    return(
        <table>
            <tr>
              <td>Name</td>
              <td>Prices</td>
            </tr>
          <tbody>{row}</tbody>
        </table>
    )
  }
}
export default ProductTable;