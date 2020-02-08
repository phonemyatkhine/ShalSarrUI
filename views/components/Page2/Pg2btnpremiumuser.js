import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function Pg2btnpremiumuser() {
  return (


    <Ripple style = {styles.button}>

    <Icon style={styles.icon} name="star" size={24} color="#212121"/>

    </Ripple>




  );

}
export default Pg2btnpremiumuser ;


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
    fontWeight:'bold',
    color:'#FFC107',

  },
})
