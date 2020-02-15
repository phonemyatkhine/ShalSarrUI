import React from 'react';
import {View,Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';


import HistoryScreen from '../presenters-screens/HistoryScreen';
import RestaurantsScreen from '../presenters-screens/RestaurantsScreen';
import StoreScreen from '../presenters-screens/StoreScreen';
import ProfileScreen from '../presenters-screens/ProfileScreen';
import MenuScreen from '../presenters-screens/MenuScreen';





const BottomTabNavigator = createBottomTabNavigator
(

  {

    Restaurants: RestaurantsScreen,
    Store: StoreScreen,
    Profile: ProfileScreen,
    Menu: MenuScreen

  },

  {


    tabBarOptions: {
         animationEnabled: true,
          activeTintColor: '#d63031',
   style: {
     height: 70
   },
   labelStyle:
   {
      padding:0,
      bottom:10,
   },
 }
  }

);


export default BottomTabNavigator;
