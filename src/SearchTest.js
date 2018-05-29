import React, { Component } from 'react';
class SearchTest extends Component {
  constructor() {
    super();
    this.valueChange = this.valueChange.bind(this);
    this.selectBoy = this.selectBoy.bind(this);
    this.selectGirl = this.selectGirl.bind(this);
  }
  selectBoy () {
    this.props.selectBoy();
  }
  selectGirl() {
    this.props.selectGirl();
  }
  valueChange (e) {
    this.props.valueChange(e.target.value);
  }
  render() {
    return(
      <div className="search-wrapper">
        <input type="text" placeholder="请输入姓名进行搜索" className="search-input" onChange={this.valueChange}/>
        <button className="girl" onClick={this.selectGirl}>点击筛选女生</button>
        <button className="boy" onClick = {this.selectBoy}>点击筛选男生</button>
      </div>
    )
  }
}
export default SearchTest;