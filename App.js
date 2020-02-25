
import { StyleSheet, Text, View, Alert, StatusBar } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import React, { useState, useEffect, AsyncStorage} from 'react'
import Homestack from './route/Homestack'

App = () => {

  if(true) {
    return(
      <View style={styles.container}>
        <Homestack/>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <AppNavigator/>
      </View>
    );
  }
}

export default App
const statusBarHeight = StatusBar.currentHeight

const styles = StyleSheet.create({
  container: {
    paddingTop : statusBarHeight,
    justifyContent:'center',
    flex: 1,
    backgroundColor: '#fff',
  },
});
