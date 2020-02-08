import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';


function Pg4QRscanner() {
  return (

    <ImageBackground source={require('../../../assets/backgroundimage/qrcode.png')} style = {styles.background}>
    </ImageBackground>


  );

}
export default Pg4QRscanner ;


const styles = StyleSheet.create ({

   background:
   {

     alignItems:'center',
     justifyContent:'center',
     width:180,
     height:180,

   },

})
