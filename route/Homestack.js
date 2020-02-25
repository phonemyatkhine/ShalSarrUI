import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import LoginScreen from '../presenters-screens/LoginScreen'
import AppNavigator from '../navigation/AppNavigator'

//////////tab navigation

const screens = {

  Home:{
      screen:LoginScreen
  },
  AppNavigator:{
      screen:AppNavigator,
      navigationOptions:
      {
        headerShown: false,
      },
  },
}

const Homestack = createStackNavigator(screens);
export default createAppContainer(Homestack);



