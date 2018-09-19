import { ISLOADING, FETCHING_POST, FETCHING_ERROR } from '../constants';

const initialState = {
  post: [],
  isLoading: false,
  error: null,
};

function fetchPostReducer(state = initialState, action) {
  switch(action.type) {
    case ISLOADING:
      return { ...state, isLoading: action.status };
    case FETCHING_POST:
      return { ...state, post: action.payload };
    case FETCHING_ERROR:
      return { ...state, post: [], error: action.payload };
    default:
      return state;
  }
}

export default fetchPostReducer;
