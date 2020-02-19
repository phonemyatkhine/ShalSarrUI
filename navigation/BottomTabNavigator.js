import React from 'react';
import {View,Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';



import StoreScreen from '../presenters-screens/StoreScreen';
import ProfileScreen from '../presenters-screens/ProfileScreen';
import Restaurantstack from '../route/Restaurantstack';
import Menustack from '../route/Menustack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';





const BottomTabNavigator = createBottomTabNavigator
(

  {

    Restaurants: {
        screen: Restaurantstack,
        navigationOptions: {
            title: "Restaurants",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="rice"
                    size={30}
                    color={tintColor} />
            )
        }
    },
    Store: {
        screen: StoreScreen,
        navigationOptions: {
            title: "Store",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="credit-card-plus"
                    size={30}
                    color={tintColor} />
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            title: "Profile",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="face"
                    size={30}
                    color={tintColor} />
            )
        }
    },
    Menu: {
        screen: Menustack,
        navigationOptions: {
            title: "Menu",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="view-headline"
                    size={30}
                    color={tintColor} />
            )
        }
    },




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
