import React , {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import RestaurantsScreen from '../presenters-screens/RestaurantsScreen';
import CategoryScreen from '../presenters-screens/CategoryScreen';






//////////tab navigation

const screens = {
  screen1:{
    screen:RestaurantsScreen
  },
  screen2:{
    screen:CategoryScreen
  },


}


const Restaurantstack = createStackNavigator(screens);


export default createAppContainer(Restaurantstack);
