import React, { Component } from 'react';

import Todo from './Todo';
import './../styles/TodoList.css';

class TodoList extends Component {
  render() {
    let {todos} = this.props;
    let todoList = todos.map((todo, index) => <Todo key={todo.id.toString()} {...todo} onToggle={this.props.onToggle} onDelete={this.props.onDelete}/>);
    let renderTodos = () => {
      if(todos.length > 0){
        return todoList;
      }else {
        return <p className="message">Nothing to do</p>;
      }
    };
    return (
      <div className="todo-list">
        {renderTodos()}
      </div>
    );
  }
}

export default TodoList;
