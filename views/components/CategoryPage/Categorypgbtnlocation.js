import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';

import Icon from 'react-native-vector-icons/MaterialIcons';




function Categorypgbtnlocation () {
  return (

    <View style= {styles.container}>
          <View style= {styles.box}>
                  <View style= {styles.flex1}>
                      <Text style={styles.text}>Location</Text>
                  </View>
                  <View style= {styles.flex2}>
                      <Icon style={styles.icon} name="location-on" size={50} color="#146CA3"/>
                  </View>
          </View>
    </View>

  );

}
export default Categorypgbtnlocation ;


const styles = StyleSheet.create ({

   container: {
    zIndex:1,
    justifyContent:'center',
    alignItems: 'center',
   },
   text:
   {
      fontSize:18,
      color:'#212121',
      marginLeft:10,
      marginTop:10,
    },
   box:
   {
     borderWidth: 1,
     borderColor: '#E0E0E0',
      width:160,
      height:120,
      borderRadius:15,
   },
   flex1:
   {

      flex:1,
   },
   flex2:
   {
     justifyContent:'center',
     alignItems:'flex-end',
      flex:1,
   },
   icon:
   {
     marginRight:10,

   },

})
