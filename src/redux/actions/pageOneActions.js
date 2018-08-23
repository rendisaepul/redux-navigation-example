import { ISLOADING, FETCHING_USERS, FETCHING_ERROR } from '../constants';
import axios from 'axios';

export function setLoading(status) {
  return {
    type: ISLOADING,
    status,
  };
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((response) => {
        dispatch(setLoading(false));
        dispatch({ type: FETCHING_USERS, payload: response.data })
      })
      .catch((error) => {
        dispatch(setLoading(false));
        console.log('error', error);
      })
  }
}
