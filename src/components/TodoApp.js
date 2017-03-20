import React, { Component } from 'react';
import moment from 'moment';
import uuidV4 from 'uuid/v4';

import TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import TodoAdd from './TodoAdd';
import {getTodos, setTodos, filterTodos} from './../api/todoAPI';
import './../styles/TodoApp.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: getTodos()
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidUpdate() {
    setTodos(this.state.todos);
  }

  handleToggle(id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }

      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  }

  addTodo(todoText) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuidV4(),
          text: todoText,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  handleDelete(id) {
    let updatedTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <div className="todo-heading">
          <h1>Todo Application</h1>
        </div>
        <div className="todo-app">
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={filteredTodos} onToggle={this.handleToggle} onDelete={this.handleDelete}/>
          <TodoAdd handleAdd={this.addTodo}/>
        </div>
      </div>

    );
  }
}


export default TodoApp;
