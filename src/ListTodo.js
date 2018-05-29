import React, { Component } from 'react';
class ListTodo extends Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
  }
  delete(index) {
    this.props.delete(index);
  }
  render() {
    const todoList = this.props.todoList;
    const todoListItem  = todoList.map((elem,index) => {
      return (
      <li key={index} className="todolist-li">
         <span>{elem}</span>
         <button onClick =  {() => this.delete(index)}>删除</button>
      </li>
      )
    });
    // map 要有return 啊 大哥
    return(
      <ul className='things'>
        {todoListItem}
      </ul>
    );
  }
}
export default ListTodo;