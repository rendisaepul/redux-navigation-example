import axios from 'axios';
import { ISLOADING, FETCHING_USER_DETAIL, LOADING } from '../constants';

function setLoading(status) {
  return {
    type: LOADING,
    status,
  };
}

export function fetchUserDetail(userId) {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios.get(`http://jsonplaceholder.typicode.com/users?id=${userId}`)
      .then((response) => {
        dispatch({ type: FETCHING_USER_DETAIL, payload: response.data[0] });
        dispatch(setLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoading(false));
      })
  }
}

