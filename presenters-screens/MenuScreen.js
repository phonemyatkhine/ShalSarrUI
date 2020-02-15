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
import Pg5btnsaved from '../views/components/Page5/Pg5btnsaved'
import Pg5btnaboutus from '../views/components/Page5/Pg5btnaboutus'
import Pg5btncontactus from '../views/components/Page5/Pg5btncontactus'
import Pg5btnhistory from '../views/components/Page5/Pg5btnhistory'
import Pg5btneditprofile from '../views/components/Page5/Pg5btneditprofile'
import Pg5btnlogout from '../views/components/Page5/Pg5btnlogout'


import { MaterialCommunityIcons } from '@expo/vector-icons';

import  { useState, useEffect } from 'react';
import { Animated } from 'react-native';


//////////tab navigation


const TabIcon = (props) => (
  <MaterialCommunityIcons
    name={'view-headline'}
    size={30}
    color={props.focused ? '#d63031' : '#9e9e9e'}
  />
)





/////////////







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





export default class RestaurantsScreen extends Component {


  static navigationOptions = {
    tabBarIcon: TabIcon
  };





  render(){
    return (
  <View style={{ flex: 1, }}>
    <FadeInView style={styles.container}>
      <View style={styles.container}>


      <SafeAreaView style={styles.container}>



            <View style={styles.box1}>

                    <View style={styles.b1flex1}>

                    </View>
                    <View style={styles.b1flex2}>

                        <Text style={styles.text}>Settings</Text>

                    </View>

            </View>
              <View style={styles.box2}>
                <Pg5btneditprofile/>
                <Pg5btnsaved/>
                <Pg5btnhistory/>
                <Pg5btnaboutus/>
                <Pg5btncontactus/>
              </View>
              <View style={styles.box3}>

                      <Pg5btnlogout/>

              </View>


            </SafeAreaView>


      </View>

      </FadeInView>
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
    fontWeight:'bold',

  },
  box1:
  {
    flexDirection:'row',
    height:67,




  },
          b1flex1:
          {

            flex:1




          },
          b1flex2:
          {


                flex:19,
                alignItems:'flex-start',
                justifyContent:'center',




          },
  box2:
  {


    height:375,



  },
  box3:
  {

    alignItems:'center',
    justifyContent:'flex-end',

    flex:1,


  },











});
