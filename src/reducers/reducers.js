import moment from 'moment';
import uuidV4 from 'uuid/v4';

export var searchText = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export var showCompleted = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export var todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuidV4(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];

    case 'REMOVE_TODO':
      return state.filter((todo) => {
        return todo.id !== action.id;
      });

    case 'TOOGLE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id) {
          let nextCompleted = !todo.completed;

          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          };
        }

        return todo;
      });

    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];

    default:
      return state;
  }
};
