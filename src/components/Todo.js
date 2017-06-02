import React, { Component } from 'react';
import moment from 'moment';
import FaClose from 'react-icons/lib/fa/close';
import { connect } from 'react-redux';

import './../styles/Todo.css';
import { toggleTodo, removeTodo } from './../actions/actions';

class Todo extends Component {
  render() {
    let {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    let renderClass = () => {
        return completed ? 'completed' : 'todo-text';
    }

    let renderDate = () => {
        let message = 'Created ';
        let timestamp = createdAt;

        if(completed) {
          message = 'Completed ';
          timestamp = completedAt;
        }

        return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }

    return (
      <div className="todo">
        <div className="todo-block">
          <div className={renderClass()} onClick={() => dispatch(toggleTodo(id))}>
            <input type="checkbox" checked={completed}/>
            <p>{text}</p>
          </div>
          <div className="todo-delete" onClick={() => dispatch(removeTodo(id))}>
            <FaClose />
          </div>
        </div>
        <div className={renderClass()}>
          <p className="date">{renderDate()}</p>
        </div>
      </div>
    );
  }
}

export default connect()(Todo);
