import React, { Component } from 'react';
import Title from './Title';
import SearchTest from './SearchTest';
class InformationSearch extends Component {
  constructor() {
    super();
    this.state = {
      value:'',
      boy:'',
      girl:'',
      all: ''
    }
    this.search = this.search.bind(this);
    this.selectBoy = this.selectBoy.bind(this);
    this.selectGirl = this.selectGirl.bind(this);
  }
  search(value) {
    this.setState({
      value,
    });
  }
  selectBoy() {
    this.setState({
      boy:true,
    });
  }
  selectGirl () {
    this.setState({
      girl:true,
    });
  }
  render() {
    const person = [
      {
        "name":"张国",
        "sex":"男",
        "email":"zhangguoli@123.com",
      },
      {
        "name":"周芳冰",
        "sex":"女",
        "email":"1978467950@qq.com",
      },
      {
        "name":"张铁",
        "sex":"男",
        "email":"zhangtieli@123.com",
      },
      {
        "name":"邓婕",
        "sex":"女",
        "email":"zhenjie@123.com",
      },
      {
        "name":"张立",
        "sex":"男",
        "email":"zhangguoli@123.com",
      },
      {
        "name":"张林",
        "sex":"男",
        "email":"zhangtieli@123.com",
      },
      {
        "name":"邓网婕",
        "sex":"女",
        "email":"zhenjie@123.com",
      }
    ];   
    const personItem = person.map((elem,index) => {
      if(elem.name.indexOf(this.state.value) == -1) {
        return ;
        // 如果名字内不包含输入框中输入的值～则那一行为空（不显示）
      } else if(this.state.boy ? elem.sex == "女" :'') {
        return ;
        // 把男孩挑选出来: 如果点击了筛选男生按钮,this.state.boy变为true,
        // elem.sex == "女" 再判断sex是否为女，若是，那一个元素为空
      } else if(this.state.girl ? elem.sex == "男" :'') {
        return ;
      } else if(this.state.all) {
        return;
      }
      else return (
        <div className='title-wrapper' key={index}>
          <div className="mationTitle">{elem.name}</div>
          <div className="mationTitle">{elem.sex}</div>
          <div className="mationTitle">{elem.email}</div>
        </div>
      )      
    });
    return(
      <div>
        <SearchTest valueChange = {this.search} selectBoy={this.selectBoy} selectGirl = {this.selectGirl} selectAll = {this.selectAll}/>
        <Title/>
        {personItem}
      </div>
    );
  }
}
export default InformationSearch;
