import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Pg1btnLoginwithfacebook from './Pg1btnLoginwithfacebook'
import Pg1txtShalsar from './Pg1txtShalsar'

function Pg1Backgroundimage() {
  return (

    <ImageBackground source={require('../../../assets/backgroundimage/bgimg.jpg')} style = {styles.background}>

      <Pg1txtShalsar/>
      <Pg1btnLoginwithfacebook/>
      <View style={styles.layer}>
      </View>
    </ImageBackground>


  );

}
export default Pg1Backgroundimage ;


const styles = StyleSheet.create ({

   background:
   {

     alignItems:'center',
     justifyContent:'center',
     width:'100%',
     height:'100%',

   },
   layer:
   {
     position:'absolute',
     zIndex:0,
    alignItems:'center',
     justifyContent:'center',
     width:'100%',
     height:'100%',
     backgroundColor:'#000',
     opacity: 0.5,

   },

})
