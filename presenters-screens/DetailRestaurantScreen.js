
'use strict';

import React , {Component} from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {QRCode} from 'react-native-custom-qr-codes-expo';


import Pg4btnmore from '../views/components/Page4/Pg4btnmore'
import Pg4btnfavouriteandsave from '../views/components/Page4/Pg4btnfavouriteandsave'
import Pg4imagebanner from '../views/components/Page4/Pg4imagebanner'
import Icon from 'react-native-vector-icons/Ionicons';
import Pg4QRscanner from '../views/components/Page4/Pg4QRscanner'


export default function DetailrestaurantScreen({route,navigation}) {
  const {user} = "abc"
    return (


            <View style={styles.container}>


            <SafeAreaView style={styles.container}>



                  <View style={styles.box1}>

                          <View style={styles.b1flex1}>

                              <Icon style={styles.icon} name="ios-arrow-back" size={24} color="#212121"/>

                          </View>
                          <View style={styles.b1flex2}>

                                <Text style={styles.text}>365 Cafe</Text>

                          </View>
                          <View style={styles.b1flex3}>
                                  <Pg4btnfavouriteandsave/>
                          </View>


                  </View>
                    <View style={styles.box2}>
                        <Pg4imagebanner/>
                    </View>
                    <View style={styles.box3}>
                      <Text style={styles.subheading}>{JSON.stringify(user)}</Text>
                      <QRCode  size='180'   content='https://facebook.com'/>

                    </View>
                    <View style={styles.box4}>
                        <Pg4btnmore/>
                    </View>

           </SafeAreaView>


            </View>








    );
  }
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor : "#FFF"
  },
  text:
  {
    fontSize:34,
    fontWeight:'bold',

  },
  box1:
  {
    flexDirection:'row',
    height:67,



  },
        b1flex1:
        {
          marginLeft:19,
          flex:1,
          justifyContent:'center',

        },
        b1flex2:
        {

          flex:7,

          alignItems:'flex-start',
          justifyContent:'center',


        },
        b1flex3:
        {
          marginRight:19,
          flex:2,

          alignItems:'flex-end',
          justifyContent:'center',


        },
  box2:
  {


    flex:1,


  },
  box3:
  {
    flex:1,
    alignItems:'center',
    justifyContent:'center',


  },
  box4:
  {
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end',


  },
  subheading:
  {
      fontWeight:'bold',
  },

});
