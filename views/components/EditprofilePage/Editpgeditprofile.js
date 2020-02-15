import React from 'react';
import { TouchableOpacity, StyleSheet, Text ,ImageBackground, View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';





function Editpgeditprofile() {
  return (

    <View style= {styles.container}>
          <View style= {styles.layer}>

            <View style={styles.box1}>
                      <ImageBackground source={require('../../../assets/backgroundimage/profile.jpg')} style = {styles.background}>
                      </ImageBackground>
            </View>
            <View style={styles.box2}>
                    <Text style={styles.subheading}>Change profile picture</Text>
            </View>




          </View>
    </View>

  );

}
export default Editpgeditprofile ;


const styles = StyleSheet.create ({

   container: {
    zIndex:1,
    alignItems: 'center',
   },
   background:
   {
     overflow: 'hidden',
     borderRadius:100,
     width:150,
     height:150,
   },
  layer:
  {
      flexDirection:'column',
      width:337,
      height:174,
  },
  subheading:
  {

    color:'#146CA3',
    fontSize:12,

  },
  box1:{
    alignItems:'center',
      justifyContent:'center',
      flex:8,

  },
  box2:{
    alignItems:'center',
      justifyContent:'center',
      flex:1,
  },


})
