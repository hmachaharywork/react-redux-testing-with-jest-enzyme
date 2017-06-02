import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import './../styles/TodoList.css';
import {filterTodos} from './../api/todoAPI';

class TodoList extends Component {
  render() {
    let {todos, showCompleted, searchText} = this.props;
    let filteredTodos = filterTodos(todos, showCompleted, searchText);
    let renderTodos = () => {
      if(filteredTodos.length > 0){
        return  filteredTodos.map((todo) => <Todo key={todo.id.toLowerCase()} {...todo}/>);
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

export default connect(
  (state) => {
    return {
      todos: state.todos,
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoList);
