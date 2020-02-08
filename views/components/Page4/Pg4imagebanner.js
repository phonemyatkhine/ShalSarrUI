import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';


function Pg4imagebanner() {
  return (

    <ImageBackground source={require('../../../assets/backgroundimage/imagebanner.jpg')} style = {styles.background}>
    </ImageBackground>


  );

}
export default Pg4imagebanner ;


const styles = StyleSheet.create ({

   background:
   {

     alignItems:'center',
     justifyContent:'center',
     width:'100%',
     height:150,

   },

})
