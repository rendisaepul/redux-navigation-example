import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/pageOneActions';

export default class ChildPageOne extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is Child Page One</Text>
      </View>
    );
  }
}

// const mapStateToProps = ({ state }) => ({
//   isLoading: state.pageOne.isLoading,
//   users: state.pageOne.users
// });
