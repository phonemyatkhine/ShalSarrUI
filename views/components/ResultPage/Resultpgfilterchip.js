import React,{ useState } from 'react';
import { TouchableOpacity, StyleSheet, Text , View,TextInput, ScrollView} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Chip } from 'react-native-paper';
import RNPickerSelect , { defaultStyles } from 'react-native-picker-select';
import { RNChipView } from 'react-native-chip-view'


function Resultpgfilterchip() {


  return (

    <View style= {styles.container}>

          <View style= {styles.layer}>


          <View style={styles.box1}>
                <RNChipView
                ellipsizeMode={'middle'}
                backgroundColor={'#f5f5f5'}
                title={'Alone'}
                avatar={false}
                cancelable={true}
                titleStyle={styles.text}
                />
          </View>
          <View style={styles.box2}>
               <RNChipView
                ellipsizeMode={'middle'}
                backgroundColor={'#f5f5f5'}
                title={'25% promotion'}
                avatar={false}
                cancelable={true}
                titleStyle={styles.text}
                />
          </View>













            </View>

    </View>



  );

}
export default Resultpgfilterchip ;


const styles = StyleSheet.create ({

   container: {
     flexDirection:'row',
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
   },

  text:
  {
    color:'#212121',
    fontSize:14,

  },
  layer:
  {
    width:'100%',

    flexDirection:'row',
  },
  box1:
  {
    marginLeft:10,
  },
  box2:
  {
    marginLeft:10,
  },

  chip: {
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor:'#fff',
    borderColor: '#E0E0E0',
    alignItems:'center',
    justifyContent:'center',
     width:'auto',
     height:50,
     borderRadius:100,
     margin: 5
   },
   chipText: {
     fontSize:14,
     color: "#000"
   }

})
