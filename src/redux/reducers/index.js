import { combineReducers } from 'redux';
import fetchUserReducer from './pageOneReducer';

const mainReducers = combineReducers({
  pageOne: fetchUserReducer,
});

export default mainReducers;
