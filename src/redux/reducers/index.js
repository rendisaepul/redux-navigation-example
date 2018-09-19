import { combineReducers } from 'redux';
import fetchPostReducer from './pageOneReducer';
import userDetailReducer from './userDetailReducer';

const mainReducers = combineReducers({
  pageOne: fetchPostReducer,
  userDetail: userDetailReducer,
});

export default mainReducers;
