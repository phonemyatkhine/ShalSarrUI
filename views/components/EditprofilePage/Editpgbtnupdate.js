import React from 'react';
import { TouchableOpacity, StyleSheet, Text ,ImageBackground, View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';





function Editpgbtnupdate() {
  return (

    <View style= {styles.container}>
          <View style= {styles.layer}>
                <View style= {styles.box1}>
                  <Ripple style={styles.ripple}>
                    <View style= {styles.btncancel}>
                      <Text style={styles.text}>Not now</Text>
                    </View>
                  </Ripple>
                </View>


                <View style= {styles.box2}>
                  <Ripple style={styles.ripple}>
                        <View style= {styles.btnupdate}>
                          <Text style={styles.text}>Save</Text>
                        </View>
                  </Ripple>
                </View>
          </View>
    </View>

  );

}
export default Editpgbtnupdate ;


const styles = StyleSheet.create ({

   container: {

     flex:1,
     alignItems:'center',
     justifyContent:'center',

   },
   layer:
   {
      marginBottom:10,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      width:'90%',
   },
  text:
  {

    color:'#146CA3',
    fontSize:14,
    fontWeight:'bold',

  },
  box1:
  {
      flex:1,
      alignItems:'center',
      justifyContent:'center',

  },
  btncancel:
  {
    alignItems:'center',
    justifyContent:'center',
      width:160,
      height:50,
  },
  box2:
  {
      flex:1,
      alignItems:'center',
      justifyContent:'center',

  },
  btnupdate:
  {
      borderRadius:10,
      alignItems:'center',
     justifyContent:'center',
      width:160,
      height:50,
      backgroundColor:'#f5f5f5',
  },
  ripple:
  {
    borderRadius:10,
      overflow:'hidden',
  },

})
