import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { } from 'react-native'
import TabOne from './component/tabOne';
import TabTwo from './component/tabTwo';
import UserDetail from './component/userDetail';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: TabOne,
      navigationOptions: {
        title: 'SAMPLE FETCH (press one)',
      }
    },
    UserDetail: {
      screen: UserDetail,
      navigationOptions: {
        title: 'USER DETAIL',
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const RootStack = createBottomTabNavigator(
  {
    // Home: HomeStack,
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Tab One',
      }
    },
    TabTwo: {
      screen: TabTwo,
      navigationOptions: {
        title: 'Tab Two',
      }
    },
  },
);

export default RootStack;
