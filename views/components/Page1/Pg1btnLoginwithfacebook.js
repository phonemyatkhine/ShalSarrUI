import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';

function Pg1btnLoginwithfacebook() {
  return (

    <Ripple style = {styles.button}>
    <Text style = {styles.btntext}>Login with FACEBOOK</Text>
    </Ripple>

  );

}
export default Pg1btnLoginwithfacebook;


const styles = StyleSheet.create ({

   container: {

      alignItems: 'center',
   },
   button: {
     alignItems:'center',
     justifyContent:'center',
     zIndex:1,
    overflow: 'hidden',
    width: 187,
    height:50,
    borderRadius:10,
    backgroundColor: '#D63031',
   },
   btntext:
   {
     fontWeight:'bold',
     color:'white',

   }
})
