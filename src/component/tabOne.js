import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/pageOneActions';

class TabOne extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPost();
  }

  renderPost(data) {
    return (
      <View>
        {data.map((item, idx) =>
          <TouchableOpacity
            key={idx}
            style={{ margin: 5, backgroundColor: 'white', borderRadius: 5, elevation: 5 }}
            onPress={() => this.props.navigation.navigate('UserDetail', { id: item.userId })}
          >
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={{ textAlign: 'center', paddingHorizontal: 20, alignSelf: 'center' }}>{item.userId}</Text>
              <View style={{ flexDirection: 'column', flexWrap: 'wrap', flex: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.title}</Text>
                <Text>{item.body}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  render() {
    if (this.props.isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size={50}/>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            {this.renderPost(this.props.post)}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ state }) => ({
  isLoading: state.pageOne.isLoading,
  post: state.pageOne.post,
});

export default connect(mapStateToProps, actions)(TabOne);