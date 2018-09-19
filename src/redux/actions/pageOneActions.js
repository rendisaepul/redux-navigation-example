import { ISLOADING, FETCHING_POST, FETCHING_ERROR } from '../constants';
import axios from 'axios';

function setLoading(status) {
  return {
    type: ISLOADING,
    status,
  };
}

export function fetchPost() {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        dispatch(setLoading(false));
        dispatch({ type: FETCHING_POST, payload: response.data })
      })
      .catch((error) => {
        dispatch(setLoading(false));
        console.log('error', error);
      })
  }
}
