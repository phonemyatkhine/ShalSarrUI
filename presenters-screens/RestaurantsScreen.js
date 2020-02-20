import React , {Component} from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView,Alert } from 'react-native';

import Pg1btnLoginwithfacebook from '../views/components/Page1/Pg1btnLoginwithfacebook'
import Pg1txtShalsar from '../views/components/Page1/Pg1txtShalsar'
import Pg1Backgroundimage from '../views/components/Page1/Pg1Backgroundimage'
import Pg2profile from '../views/components/Page2/Pg2profile'
import Pg2txtprofilename from '../views/components/Page2/Pg2txtprofilename'
import Pg2txtsavedamount from '../views/components/Page2/Pg2txtsavedamount'
import Pg2energyleftindicator from '../views/components/Page2/Pg2energyleftindicator'
import Pg2mostvisitedrestaurant from '../views/components/Page2/Pg2mostvisitedrestaurant'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/MaterialIcons';

import Pg3searchbox from '../views/components/Page3/Pg3searchbox'
import Pg3restaurantcard from '../views/components/Page3/Pg3restaurantcard'
import Pg3promotionbar from '../views/components/Page3/Pg3promotionbar'
import Pg3btncategory from '../views/components/Page3/Pg3btncategory'
import {KeyboardAvoidingView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import  { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { NavigationEvents } from 'react-navigation';


//////////tab navigation


RestaurantsScreen.navigationOptions={

  headerShown: false,
  cardStyle:{
    backgroundColor:'#fff',
  }
}








/////////////

//////////////fade animation
const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}
////////////

export default function RestaurantsScreen ({navigation})
{
    const pressHandler= () => {
      navigation.navigate('screen2');
    }
    const searchboxpressHandler= () => {
      navigation.navigate('SearchScreen');
    }
  return (
  <View style={{ flex: 1, }}>
    <FadeInView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>


      <SafeAreaView style={styles.container}>
      <View style={styles.box1}>

      <View style={styles.b1flex1}>
      <Text style={styles.text}>Restaurants</Text>
      </View>
      <View style={styles.b1flex2}>
            <Ripple style = {styles.button}  onPress={pressHandler}>

            <Icon style={styles.icon} name="drawing" size={24} color="#212121"/>

            </Ripple>
      </View>

      </View>

            <ScrollView style={styles.scrollView}>
              <View style={styles.searchboxcontainer}>
                      <Ripple style={styles.layer} onPress={searchboxpressHandler} >
                        <View style={styles.searchbox1}>
                          <Iconfont name="search" size={24} color="#757575"/>
                        </View>
                        <View style={styles.searchbox2}>

                          <Text style={styles.subtext}>Search restaurants...</Text>

                        </View>

                      </Ripple>
              </View>

              <View style={styles.box2}>
                <Pg3restaurantcard/>
              </View>
              <View style={styles.box3}>
                <Pg3restaurantcard/>
              </View>

            </ScrollView>
          </SafeAreaView>

      </KeyboardAvoidingView>


      </FadeInView>
    </View>



    );

}

const styles = StyleSheet.create({
  container: {

    flex:1,
    flexDirection:'column',
  },
  searchboxcontainer:
  {
    alignItems:'center',
    flex:1,

  },
  layer:
  {

    alignItems:'center',
    overflow:'hidden',
    borderRadius:20,
    flexDirection:'row',
    width:'90%',
    height:55,
    backgroundColor:'#eee',
  },
  searchbox1:{
    alignItems:'flex-end',
    justifyContent:'center',
    flex:1,


  },
  searchbox2:{
    marginLeft:10,
    marginRight:10,
    flex:7,
    justifyContent:'center',


  },
  subtext:
  {
      fontSize:14,
      color:'#757575',
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
    flex:2,
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
    marginTop:25,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',





  },

  box3:
  {
      marginTop:25,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',





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

    alignItems:'center',
    justifyContent:'center',
    color:'#146CA3',

  },





});
