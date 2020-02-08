
'use strict';

import React , {Component} from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {QRCode} from 'react-native-custom-qr-codes-expo';

import Pg1btnLoginwithfacebook from '../views/components/Page1/Pg1btnLoginwithfacebook'
import Pg1txtShalsar from '../views/components/Page1/Pg1txtShalsar'
import Pg1Backgroundimage from '../views/components/Page1/Pg1Backgroundimage'
import Pg2profile from '../views/components/Page2/Pg2profile'
import Pg2txtprofilename from '../views/components/Page2/Pg2txtprofilename'
import Pg2txtsavedamount from '../views/components/Page2/Pg2txtsavedamount'
import Pg2energyleftindicator from '../views/components/Page2/Pg2energyleftindicator'
import Pg2mostvisitedrestaurant from '../views/components/Page2/Pg2mostvisitedrestaurant'

import Pg3searchbox from '../views/components/Page3/Pg3searchbox'
import Pg3restaurantcard from '../views/components/Page3/Pg3restaurantcard'
import Pg3restaurantcarddetail from '../views/components/Page3/Pg3restaurantcarddetail'
import Pg5btnsaved from '../views/components/Page5/Pg5btnsaved'
import Pg5btnaboutus from '../views/components/Page5/Pg5btnaboutus'
import Pg5btnhistory from '../views/components/Page5/Pg5btnhistory'
import Pg5btnlogout from '../views/components/Page5/Pg5btnlogout'
import Pg4btnmore from '../views/components/Page4/Pg4btnmore'
import Pg4btnfavouriteandsave from '../views/components/Page4/Pg4btnfavouriteandsave'
import Pg4imagebanner from '../views/components/Page4/Pg4imagebanner'
import Pg4QRscanner from '../views/components/Page4/Pg4QRscanner'







export default class DetailrestaurantScreen extends Component {


  render(){
    return (


            <View style={styles.container}>


            <SafeAreaView style={styles.container}>



                  <View style={styles.box1}>

                          <View style={styles.b1flex1}>
                          <Text style={styles.text}>365 Cafe</Text>
                          </View>
                          <View style={styles.b1flex2}>
                            <Pg4btnfavouriteandsave/>
                          </View>


                  </View>
                    <View style={styles.box2}>
                        <Pg4imagebanner/>
                    </View>
                    <View style={styles.box3}>
                      <Text style={styles.subheading}>Scan Your QR Code</Text>
                      <QRCode  size='180'   content='https://reactnative.com'/>

                    </View>
                    <View style={styles.box4}>
                        <Pg4btnmore/>
                    </View>

           </SafeAreaView>


            </View>








    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
  },
  text:
  {
    fontSize:34,

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
    marginRight:19,
    flex:1,

    alignItems:'flex-end',
    justifyContent:'center',


  },
  box2:
  {


    height:150,




  },
  box3:
  {

    alignItems:'center',
    justifyContent:'center',
    height:392,

  },
  box4:
  {
    alignItems:'center',
    justifyContent:'center',

  },
  subheading:
  {
      fontWeight:'bold',
  },

});
