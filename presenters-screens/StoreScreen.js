import React , {Component} from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native';





import Storepgshalpointpackage from '../views/components/StorePage/Storepgshalpointpackage'
import Storepgpaymentmethod from '../views/components/StorePage/Storepgpaymentmethod'
import Storepgconfirmnumber from '../views/components/StorePage/Storepgconfirmnumber'
import Storepgbtngrabnow from '../views/components/StorePage/Storepgbtngrabnow'
import {KeyboardAvoidingView} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import  { useState, useEffect } from 'react';
import { Animated } from 'react-native';


//////////tab navigation







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




export default class StoreScreen extends Component {



  render(){
    return (
<View style={{ flex: 1, }}>
  <FadeInView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}  behavior="height" enabled >


      <SafeAreaView style={styles.container}>
      <View style={styles.box1}>

              <View style={styles.b1flex1}>

              </View>
              <View style={styles.b1flex2}>
              <Text style={styles.text}>Store</Text>
              </View>

      </View>



      <ScrollView style={styles.scrollView}  alwaysBounceVertical={false} bounces={false} >
              <View style={styles.box2}>
                      <Text style={styles.subheading}>Choose your Shal Point package</Text>
                      <Storepgshalpointpackage/>
              </View>
              <View style={styles.box3}>
                    <Text style={styles.subheading}>Choose your payment method</Text>
                    <Storepgpaymentmethod/>

              </View>
              <View style={styles.box4}>
              <Text style={styles.subheading}>Confirm your phone number</Text>
              <Storepgconfirmnumber/>

              </View>
      </ScrollView>
              <View style={styles.box5}>

                <Storepgbtngrabnow/>

              </View>


          </SafeAreaView>

      </KeyboardAvoidingView>



      </FadeInView>
    </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,


  },
  subheading:
  {
      marginLeft:19,
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

      flex:1,




    },
    b1flex2:
    {

      flex:19,
      alignItems:'flex-start',
      justifyContent:'center',





    },
  box2:
  {

    height:191,



  },
  box3:
  {


    height:225,


  },

  box4:
  {


    height:97,



  },
  box5:
  {

    justifyContent:'flex-end',
    alignItems:'center',
    height:71,
  },











});
