import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';


function Pg2profile() {
  return (

    <ImageBackground source={require('../../../assets/backgroundimage/profile.jpg')} style = {styles.background}>
    </ImageBackground>



  );

}
export default Pg2profile ;


const styles = StyleSheet.create ({

   background:
   {

     width:150,
     height:150,
     overflow: 'hidden',
     borderRadius:100,

   },


})
