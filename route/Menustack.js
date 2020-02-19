import React , {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MenuScreen from '../presenters-screens/MenuScreen';
import EditprofileScreen from '../presenters-screens/EditprofileScreen';
import SavedScreen from '../presenters-screens/SavedScreen';
import HistoryScreen from '../presenters-screens/HistoryScreen';







//////////tab navigation

const screens = {

  menu:{
      screen:MenuScreen
  },
  editprofile:{
      screen:EditprofileScreen
  },
  saved:{
    screen:SavedScreen
  },
  history:{
    screen:HistoryScreen
  },


}


const Menustack = createStackNavigator(screens);


export default createAppContainer(Menustack);
