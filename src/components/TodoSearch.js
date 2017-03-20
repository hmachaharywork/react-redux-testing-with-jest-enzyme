import React, { Component } from 'react';

import './../styles/TodoSearch.css';

class TodoSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    const searchText = this.searchText.value;
    const showCompleted = this.showCompleted.checked;

    this.props.onSearch(showCompleted, searchText);
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <input className="form-control" type="text" ref={(input) => this.searchText = input} placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div className="toggle-completed">
            <input type="checkbox" ref={(checkbox) => this.showCompleted = checkbox} onChange={this.handleSearch}/>
            Show completed todos
        </div>
      </div>
    );
  }
}

export default TodoSearch;
