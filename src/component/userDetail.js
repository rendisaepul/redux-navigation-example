import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../redux/actions/userDetailActions';
import kurumi from '../images/kurumi.jpg';

const { width } = Dimensions.get('window').width;

class UserDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserDetail(this.props.navigation.state.params.id);
  }

  _renderContent(item) {
    return (
      <View style={{ margin: 20, flex: 1 }}>
        <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
          <Image source={kurumi} style={{ width: 100, height: 150 }} />
          <View style={{ flex: 1, justifyContent: 'space-around', marginLeft: 5 }}>
            <Text style={{  }}>{item.name}</Text>
            <Text style={{  }}>{item.username}</Text>
            <Text style={{  }}>{item.email}</Text>
            <Text style={{  }}>{item.phone}</Text>
            <Text style={{  }}>{item.website}</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {

    if (this.props.loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size={50} />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {this._renderContent(this.props.userDetail)}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ state }) => ({
  loading: state.userDetail.loading,
  userDetail: state.userDetail.userDetail,
});

export default connect(mapStateToProps, actions)(UserDetail);
