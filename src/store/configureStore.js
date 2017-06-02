import { createStore } from 'redux';
import reducer from './../reducers/combineReducer';

export default createStore(reducer);
