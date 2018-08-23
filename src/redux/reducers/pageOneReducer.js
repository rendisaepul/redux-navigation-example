import { ISLOADING, FETCHING_USERS, FETCHING_ERROR } from '../constants';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

function fetchUserReducer(state = initialState, action) {
  switch(action.type) {
    case ISLOADING:
      return { ...state, isLoading: action.status };
    case FETCHING_USERS:
      return { ...state, users: action.payload };
    case FETCHING_ERROR:
      return { ...state, users: [], error: action.payload };
    default:
      return state;
  }
}

export default fetchUserReducer;
