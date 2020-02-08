import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './presenters-screens/LoginScreen';
import ProfileScreen from './presenters-screens/ProfileScreen';
import RestaurantsScreen from './presenters-screens/RestaurantsScreen';
import MenuScreen from './presenters-screens/MenuScreen';
import DetailrestaurantScreen from './presenters-screens/DetailrestaurantScreen';
import SavedScreen from './presenters-screens/SavedScreen';
import HistoryScreen from './presenters-screens/HistoryScreen';



export default function App() {
  return (
    <View style={styles.container}>
    <MenuScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {



    flex: 1,
    backgroundColor: '#fff',

  },
});
