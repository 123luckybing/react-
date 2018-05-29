import React, { Component } from 'react';
import TypeNew from './TypeNew';
import ListTodo from './ListTodo';
class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      todoList:[],
      // typeof this.state.todoList 为对象 object
    }
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
  }
  // this.props.arr.push不可以 因为props只读
  add(value) {
    const todo = this.state.todoList;
    if(value != '') {
      todo.push(value);
    } else {
      alert('您输入的内容为空');
    }
    this.setState({
      todoList: todo,
    });
  }
  delete(index) {
    const todo = this.state.todoList;
    todo.splice(index,1);
    // console.log(index);
    this.setState({
      todoList: todo,
    });
  }
  render() {
    return(
      <div>
        <TypeNew add = {this.add}  
                 todoList = {this.state.todoList}
        />
        <ListTodo todoList = {this.state.todoList} 
                  getValue={this.state.value} 
                  delete={this.delete}
        />
      </div>
    );
  }
}
export default Todolist;