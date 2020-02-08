import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/MaterialIcons';

function Pg4transactioncomplete() {
  return (

    <View style= {styles.container}>
      <View style={styles.layer}>
          <View style={styles.box1}>
          <Ripple style = {styles.button}>

          <Iconfont style={styles.icon} name="done" size={24} color="#212121"/>

          </Ripple>

          </View>
          <View style={styles.box2}>
            <Text style={styles.text}>Transaction is completed.</Text>
            <Text style={styles.text}>Your saved amount is 5000MMK.</Text>


          </View>

      </View>

    </View>

  );

}
export default Pg4transactioncomplete ;


const styles = StyleSheet.create ({

   container: {
    zIndex:1,
    alignItems: 'center',
   },
   
   layer:
   {

      width:375,
      height:200,

   },
   box1:
   {
      justifyContent:'flex-end',
      alignItems:'center',
      flex:1,

   },
   box2:
   {
     justifyContent:'center',
     alignItems:'center',
      flex:1,

   },
  text:
  {

    color:'#212121',
    fontSize:14,

  },
  button: {
    overflow:'hidden',
    alignItems:'center',
    justifyContent:'center',
  borderRadius:50,
   width: 60,
   height:60,
   backgroundColor: '#f5f5f5',

  },
  icon:
  {

    fontWeight:'bold',
    color:'#146CA3',

  },

})
