import React, { Component } from 'react';
class TypeNew extends Component {
  constructor() {
    super();
    this.state = {
      value:'',
    }
    this.addThing = this.addThing.bind(this);
    this.valueChange = this.valueChange.bind(this);
  }
  addThing(e) {
    e.preventDefault();
    this.props.add(this.state.value);

    this.setState({
      value:'',
    });
  }
  valueChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    // const todo = this.props.todoList.slice();
    return(
      <form onSubmit = {this.addThing}>
        <input type="text" 
          placeholder='typing a new thing to do' 
          style={{width: '500px',height:'30px',marginTop:'10px'}} 
          onChange = {this.valueChange}
          value = {this.state.value}
        />
      </form>
    );
  }
}
export default TypeNew;