import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import mainReducers from './src/redux/reducers/index';
import RootNavigator from './src/AppNavigator';

const store = createStore(
  combineReducers({ state:  mainReducers}),
  applyMiddleware(thunkMiddleware)
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}
