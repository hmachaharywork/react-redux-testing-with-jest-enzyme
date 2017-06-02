import React, { Component } from 'react';
import { connect } from 'react-redux';

import './../styles/TodoSearch.css';
import { setSearchText, toggleShowCompleted } from './../actions/actions';

class TodoSearch extends Component {

  render() {
    let {searchText, showCompleted, dispatch} = this.props;

    return (
      <div>
        <div className="input-group">
          <input className="form-control" type="text" ref={(input) => this.searchText = input} value={searchText}
            placeholder="Search todos" onChange={ () => {
              let searchText = this.searchText.value;
              dispatch(setSearchText(searchText));
            }}/>
        </div>
        <div className="toggle-completed">
            <input type="checkbox" ref={(checkbox) => this.showCompleted = checkbox} checked={showCompleted}
              onChange={() => {
                dispatch(toggleShowCompleted());
              }}/>
            Show completed todos
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoSearch);
