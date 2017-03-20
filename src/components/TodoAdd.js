import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './../styles/TodoAdd.css';

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let todoText = this.todoText.value;
    if(todoText.length > 0) {
      this.props.handleAdd(todoText);
      this.todoText.value = '';
    }else {
      this.todoText.focus();
    }

  }

  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
              <input className="form-control" type="text" ref={(input) => this.todoText = input} placeholder="What you want to do?"/>
          </div>
          <div className="input-group">
            <Button className="btn btn-primary" type="submit">Add Todo</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoAdd;
