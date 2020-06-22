import React,{ useState }from 'react';
import { TouchableOpacity, StyleSheet, Text , View,TextInput,ImageBackground} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


function Resultpgresultdata() {


  return (

    <View style= {styles.container}>
            <View style= {styles.layer}>
                        <View style= {styles.flex1}>
                              <ImageBackground source={require('../../../assets/backgroundimage/kfc.jpg')} style = {styles.background}>
                              </ImageBackground>
                        </View>
                        <View style= {styles.flex2}>
                                  <View style= {styles.f2box1}>
                                      <Text style={styles.subheading}>KFC</Text>
                                  </View>
                                  <View style= {styles.f2box2}>
                                      <Text style={styles.text}>Junction Square</Text>
                                  </View>
                        </View>
            </View>
    </View>


  );

}
export default Resultpgresultdata ;


const styles = StyleSheet.create ({

   container: {
     flex:1,
     justifyContent:'center',
    alignItems: 'center',
   },
  text:
  {
    fontSize:14,
    color:'#757575',
  },
  subheading:
  {
    fontWeight:'bold',
    fontSize:14,
    color:'#212121',
  },
  layer:
  {

    marginTop:20,
    marginLeft:15,
    flexDirection:'row',
    width:'100%',
    height:50,

  },
  flex1:
  {
      justifyContent:'center',
      alignItems:'center',
      flex:1,
  },

  flex2:
  {
      marginLeft:10,
      flex:5,
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
  },

            f2box1:
            {
                justifyContent:'flex-end',
                flex:1,

            },
            f2box2:
            {
                justifyContent:'flex-start',
                flex:1,

            },

  background:
  {
      borderRadius:50,
      overflow:'hidden',
      width:50,
      height:50,
  },

})
