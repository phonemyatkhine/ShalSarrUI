
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './presenters-screens/LoginScreen';
import ProfileScreen from './presenters-screens/ProfileScreen';
import RestaurantsScreen from './presenters-screens/RestaurantsScreen';
import MenuScreen from './presenters-screens/MenuScreen';
import DetailrestaurantScreen from './presenters-screens/DetailrestaurantScreen';
import SavedScreen from './presenters-screens/SavedScreen';
import HistoryScreen from './presenters-screens/HistoryScreen';
import StoreScreen from './presenters-screens/StoreScreen';
import EditprofileScreen from './presenters-screens/EditprofileScreen';
import CategoryScreen from './presenters-screens/CategoryScreen';
import SearchScreen from './presenters-screens/SearchScreen';

import ResultScreen from './presenters-screens/ResultScreen';

import AppNavigator from './navigation/AppNavigator';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import Menustack from './route/Menustack';
import Restaurantstack from './route/Restaurantstack';
import Homestack from './route/Homestack';


export default function App() {
  return (
    <View style={styles.container}>

    <Homestack/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {


    justifyContent:'center',
    flex: 1,
    backgroundColor: '#fff',

  },
});
