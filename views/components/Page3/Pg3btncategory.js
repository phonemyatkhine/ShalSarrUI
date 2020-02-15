import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View , Alert} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Pg3btncategory() {

  const showAlert = () =>{
        Alert.alert(
           'You need to...'
        )
     }


  return (


    <Ripple style = {styles.button} onPress={() => showAlert()} >

    <Icon style={styles.icon} name="view-grid" size={24} color="#212121"/>

    </Ripple>




  );

}
export default Pg3btncategory ;


const styles = StyleSheet.create ({
  button: {
    overflow:'hidden',
    alignItems:'center',
    justifyContent:'center',
  borderRadius:50,
   width: 45,
   height:45,
   backgroundColor: '#f5f5f5',

  },
  icon:
  {

    alignItems:'center',
    justifyContent:'center',
    color:'#146CA3',

  },
})
