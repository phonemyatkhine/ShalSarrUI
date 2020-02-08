import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/MaterialIcons';


function Pg4btnfavouriteandsave() {
  return (

    <View style={styles.layer}>

          <View style={styles.box1}>
              <Ripple style = {styles.button}>
              <Iconfont style={styles.icon} name="bookmark-border" size={24} color="#146CA3"/>
              </Ripple>
          </View>



    </View>






  );

}
export default Pg4btnfavouriteandsave ;


const styles = StyleSheet.create ({
  layer:
  {
      flexDirection:'row',
      width:98,
      height:45,

  },

  box1:
  {
      alignItems:'flex-end',
      flex:1,

  },

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


    fontWeight:'bold',


  },
})
