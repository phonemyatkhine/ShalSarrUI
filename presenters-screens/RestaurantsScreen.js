import React , {Component} from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native';

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
import Pg3promotionbar from '../views/components/Page3/Pg3promotionbar'








export default class RestaurantsScreen extends Component {
  render(){
    return (

      <View style={styles.container}>


      <SafeAreaView style={styles.container}>
      <View style={styles.box1}>

              <View style={styles.b1flex1}>

              </View>
              <View style={styles.b1flex2}>
              <Text style={styles.text}>Restaurants</Text>
              </View>

      </View>

            <ScrollView style={styles.scrollView}>
            <Pg3searchbox/>
              <View style={styles.box2}>
                <Pg3restaurantcard/>
              </View>
              <View style={styles.box3}>
                <Pg3restaurantcard/>
              </View>

            </ScrollView>
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
  box2:
  {
    marginTop:38,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',





  },

  box3:
  {
      marginTop:38,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',





  },
  box4:
  {
      marginTop:38,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',





  },



  b1flex1:
  {

    flex:1,




  },
  b1flex2:
  {

    flex:19,
    alignItems:'flex-start',
    justifyContent:'center',





  },




});
