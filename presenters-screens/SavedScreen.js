import React , {Component} from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView,TouchableOpacity } from 'react-native';

import Pg1btnLoginwithfacebook from '../views/components/FacebookLoginPage/LoginWithFacebookBtn'
import Pg1txtShalsar from '../views/components/FacebookLoginPage/ShalSarrText'
import Pg2profile from '../views/components/Page2/Pg2profile'
import Pg2txtprofilename from '../views/components/Page2/Pg2txtprofilename'
import Pg2txtsavedamount from '../views/components/Page2/Pg2txtsavedamount'
import Pg2energyleftindicator from '../views/components/Page2/Pg2energyleftindicator'
import Pg2mostvisitedrestaurant from '../views/components/Page2/Pg2mostvisitedrestaurant'

import Pg3searchbox from '../views/components/RestaurantPage/Pg3searchbox'
import Pg3restaurantcard from '../views/components/RestaurantPage/RestaurantCard'
import Pg7savedcard from '../views/components/Page7/Pg7savedcard'

import Icon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';


SavedScreen.navigationOptions={

  headerShown: false,
  cardStyle:{
    backgroundColor:'#fff',
  }
}




export default function SavedScreen ({navigation})
{
    const pressHandler= () => {
      navigation.goBack();
    }
    return (

      <View style={styles.container}>


      <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
      <View style={styles.b1flex1}>
      <TouchableOpacity style={styles.btncontainer} onPress={pressHandler}>

          <Icon style={styles.icon} name="ios-arrow-back" size={24} color="#212121"/>
      </TouchableOpacity>

      </View>
      <View style={styles.b1flex2}>

            <Text style={styles.text}>Saved</Text>

      </View>
      <View style={styles.b1flex3}>

      </View>


      </View>

            <ScrollView style={styles.scrollView}>

              <View style={styles.box2}>
                <Pg7savedcard/>
                <Pg7savedcard/>
                <Pg7savedcard/>
                <Pg7savedcard/>
                <Pg7savedcard/>

              </View>


            </ScrollView>
          </SafeAreaView>

      </View>






    );

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
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

    flex:1,
    justifyContent:'center',

  },
  b1flex2:
  {

    flex:6,

    alignItems:'flex-start',
    justifyContent:'center',


  },
  b1flex3:
  {
    marginRight:19,
    flex:1,
    alignItems:'flex-end',
    justifyContent:'center',


  },
  box2:
  {


    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',






  },
  btncontainer:{

    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    borderRadius:50,
    overflow:'hidden',

  },









});
