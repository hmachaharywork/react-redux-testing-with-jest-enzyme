import React, { Component } from 'react';

import TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import TodoAdd from './TodoAdd';
import './../styles/TodoApp.css';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <div className="todo-heading">
          <h1>Todo Application</h1>
        </div>
        <div className="todo-app">
          <TodoSearch />
          <TodoList />
          <TodoAdd />
        </div>
      </div>

    );
  }
}


export default TodoApp;
