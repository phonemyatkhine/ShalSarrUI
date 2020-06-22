import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View,TextInput} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAvoidingView} from 'react-native';

export default function RestaurantsScreen ({navigation})
{
    const pressHandler= () => {
      navigation.navigate('SearchScreen');
    }
  return (

    <View style= {styles.container}>

    <View style={styles.section1}>

    </View>
    <View style={styles.section2}>


                              <Ripple style={styles.layer} >
                                <View style={styles.box1}>
                                  <Iconfont style={styles.icon} name="search" size={24} color="#757575"/>
                                </View>
                                <View style={styles.box2}>

                                  <Text style={styles.text}>Search restaurants...</Text>

                                </View>

                              </Ripple>

    </View>
    <View style={styles.section3}>
    </View>







    </View>

  );

}



const styles = StyleSheet.create ({

   container: {
     flexDirection:'row',

    justifyContent:'center',
    alignItems: 'center',
   },

   layer:
   {
     overflow:'hidden',
     borderRadius:15,
     flexDirection:'row',
     width:'100%',
     height:55,
     backgroundColor:'#eee',
   },
   section1:
   {
      flex:1,
   },
   section2:
   {
      flex:19,

   },
   section3:
   {
      flex:1,


   },
  text:
  {

    color:'#757575',
    fontSize:16,

  },
  box1:{
    alignItems:'flex-end',
    justifyContent:'center',
    flex:1,


  },
  box2:{
    marginLeft:10,
    marginRight:10,
    flex:7,
    justifyContent:'center',


  },

  input: {
    color:'#212121',
    fontSize: 16,
 },

})
