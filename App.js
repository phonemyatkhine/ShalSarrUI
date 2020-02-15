
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
import Navlink from './presenters-screens/Navlink';
import ResultScreen from './presenters-screens/ResultScreen';

import AppNavigator from './navigation/AppNavigator';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}


export default function App() {
  return (
    <View style={styles.container}>

    <ResultScreen/>

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
