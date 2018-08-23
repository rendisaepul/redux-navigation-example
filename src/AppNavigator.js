import { createStackNavigator } from 'react-navigation';
import PageOne from './component/pageOne';
import PageTwo from './component/pageTwo';
import Home from './component/home';
import ChildPageOne from './component/childPageOne';
import pageOne from './component/pageOne';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    PageOne: {
      screen: pageOne,
      navigationOptions: {
        title: 'LIST USER',
      }
    },
    PageTwo: PageTwo,
    ChildPageOne: ChildPageOne,
  },
  {
    initialRouteName: 'Home',
  },
);

export default RootStack;
