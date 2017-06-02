import { combineReducers } from 'redux';
import { searchText, showCompleted, todos } from './reducers';

export default combineReducers({
  searchText,
  showCompleted,
  todos
});
