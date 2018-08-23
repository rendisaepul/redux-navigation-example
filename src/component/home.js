import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('PageOne')}>
          <Text>Fetch Users</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('PageTwo')} style={{ marginTop: 20 }}>
          <Text>Fetch Photos</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
