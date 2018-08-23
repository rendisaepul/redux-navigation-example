import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/pageOneActions';

class PageOne extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers(data) {
    return (
      <View>
        {data.map((item, idx) =>
          <View
            key={idx}
            style={{ margin: 5 }}
            backgroundColor='#D4E157'
          >
            <View style={{ flexDirection: 'row' }}>
              <Image style={{ width: 50, height: 50 }} source={{ uri: item.thumbnailUrl }} />
              <Text style={{ flexWrap: 'wrap' }}>{item.title}</Text>
            </View>
          </View>
        )}
      </View>
    );
  }

  render() {
    console.log('props>>>', this.props);

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChildPageOne')} style={{ padding: 20, backgroundColor: 'red', margin: 10 }}>
          <Text>This is Page One</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <ScrollView>
            {this.renderUsers(this.props.users)}
          </ScrollView>
          {/* <FlatList
            data={this.props.users}
            renderItem={({item}) => <Text>{item.name}</Text>}
          /> */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ state }) => ({
  isLoading: state.pageOne.isLoading,
  users: state.pageOne.users
});

export default connect(mapStateToProps, actions)(PageOne);