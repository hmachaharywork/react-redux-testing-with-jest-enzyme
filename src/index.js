import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './components/TodoApp';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
