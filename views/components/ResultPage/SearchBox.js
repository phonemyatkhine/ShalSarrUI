import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View,TextInput} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAvoidingView} from 'react-native';

function Resultpgsearchingbox() {
  return (

    <View style= {styles.container}>
                              <View style={styles.layer}>
                                <View style={styles.box1}>
                                  <Iconfont style={styles.icon} name="search" size={24} color="#757575"/>
                                </View>
                                <View style={styles.box2}>
                                          <TextInput
                                             style={styles.input}
                                             placeholder="Search restaurants..."
                                             autoCapitalize="none"
                                             autoCorrect={false}
                                             keyboardType="default"
                                             returnKeyType="default"
                                            clearButtonMode="while-editing"
                                             blurOnSubmit={true}
                                             maxLength={30}
                                           />

                                </View>
                                <View style={styles.box3}>
                                  <Iconfont style={styles.icon} name="filter-list" size={24} color="#146CA3"/>
                                </View>

                              </View>

    </View>

  );

}
export default Resultpgsearchingbox ;


const styles = StyleSheet.create ({

   container: {
     flex:1,
    justifyContent:'center',
    alignItems: 'center',
   },
   layer:
   {

     flexDirection:'row',
     width:'95%',
     height:55,
     borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
   },

  text:
  {

    color:'#757575',
    fontSize:16,

  },
  box1:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,

  },
  box2:{

    flex:6,
    justifyContent:'center',


  },
  box3:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,


  },

  input: {
    color:'#212121',
    fontSize: 16,
 },

})
