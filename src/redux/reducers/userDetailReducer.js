import { ISLOADING, FETCHING_USER_DETAIL, LOADING } from '../constants';

const initialState = {
  userDetail: {},
  loading: false,
  // error: null,
};

function fetchUserDetail(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.status };
    case FETCHING_USER_DETAIL:
      return { ...state, userDetail: action.payload };
    default:
      return state;
  }
}

export default fetchUserDetail;