import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PageTwo extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is Page Two</Text>
      </View>
    );
  }
}
