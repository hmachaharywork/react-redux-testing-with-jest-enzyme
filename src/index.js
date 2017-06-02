import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import TodoApp from './components/TodoApp';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import store from './store/configureStore';
import { getTodos, setTodos } from './api/todoAPI';
import { addTodos } from './actions/actions';

store.subscribe(() => {
  let state = store.getState();
  setTodos(state.todos);
});

let initialTodos = getTodos();

store.dispatch(addTodos(initialTodos));

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
