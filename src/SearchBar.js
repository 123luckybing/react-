import React, { Component } from 'react';
class SearchBar extends Component {
  constructor() {
    super();
    this.checkedChange = this.checkedChange.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  checkedChange(e) {
    this.props.checkChange(e.target.checked); //通过调用父组件的checkChange方法改变父组件state的值
    // e.target.checked 有两种值true 和 false
  }
  inputChange(e) {
    this.props.inputChange(e.target.value);
  }
  render (){ 
    return(
      <div>
        <input type="text" placeholder="Search" defaultValue = {this.props.text} onChange={this.inputChange}/>
        <br />
        <input type="checkbox" checked={this.props.checked} onChange={this.checkedChange}/>
        {/* checked来控制复选框的，checked为false未勾选 checked为true为勾选 */}
        <span style={{fontSize:'13px'}}>Only show products in stock</span>
      </div>
    )
  }
}
export default SearchBar;