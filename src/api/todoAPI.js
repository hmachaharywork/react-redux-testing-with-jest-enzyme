
module.exports = {
  setTodos: function(todos) {
    if(Object.prototype.toString.call( todos ) === '[object Array]') {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function() {
    let todos = [];

    try {
      todos = JSON.parse(localStorage.getItem('todos'));
    }catch(e) {

    }

    return (Object.prototype.toString.call( todos ) === '[object Array]') ? todos : [];

  },

  filterTodos: function(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter((todo) => {
        let todoText = todo.text.toLowerCase();
        return searchText.length === 0 || todoText.indexOf(searchText) > -1;
    });

    filteredTodos = filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed){
        return -1;
      }else if(a.completed && !b.completed) {
        return 1;
      }else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
