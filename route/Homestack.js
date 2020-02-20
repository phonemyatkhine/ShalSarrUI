import React , {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginScreen from '../presenters-screens/LoginScreen';
import AppNavigator from '../navigation/AppNavigator';







//////////tab navigation

const screens = {
  Home:{
      screen:LoginScreen
  },
  AppNavigator:{
      screen:AppNavigator,

      navigationOptions:
      {
        header: null,
      },
  },




}


const Homestack = createStackNavigator(screens);


export default createAppContainer(Homestack);
