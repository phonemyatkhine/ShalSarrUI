import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import MaterialIcon, {colorPalette} from 'react-native-vector-icons/MaterialIcons';
import Font from 'react-native-vector-icons/MaterialIcons';


function Pg4btnmore() {
  return (

    <Ripple style = {styles.button}>
    <Text style={styles.btntext}>More about this restaurants</Text>



    </Ripple>

  );

}
export default Pg4btnmore;


const styles = StyleSheet.create ({

   container: {
     flex:1,
     justifyContent:'center',
      alignItems: 'center',

       },
   button: {
     alignItems:'center',
     justifyContent:'center',
     zIndex:1,
    overflow: 'hidden',
    width:220,
    height:50,
    backgroundColor:'#f5f5f5',
    borderRadius:10,

   },
   btntext:
   {
     fontWeight:'bold',
     color:'#146CA3',

   },

})
