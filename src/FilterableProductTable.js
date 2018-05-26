import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state ={
      text:'',
      checked: false,
    }
    this.search = this.search.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  search(checked) {
    this.setState({
      checked,
    });
  }
  inputChange(text) {
    this.setState({
      text,
    });
  }
  render() {
    const produces = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];
    return(
      <div>
        <SearchBar text={this.state.text} checked = {this.state.checked} checkChange={this.search} inputChange={this.inputChange}/>
        <ProductTable produces = {produces} text={this.state.text} checked = {this.state.checked}/>
      </div>
    )
  }
}
export default FilterableProductTable;