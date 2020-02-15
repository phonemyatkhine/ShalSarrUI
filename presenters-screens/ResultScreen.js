import React , {Component} from 'react';
import { StyleSheet, Text, View ,SafeAreaView, ScrollView } from 'react-native';

import Pg1btnLoginwithfacebook from '../views/components/Page1/Pg1btnLoginwithfacebook'
import Pg1txtShalsar from '../views/components/Page1/Pg1txtShalsar'
import Pg1Backgroundimage from '../views/components/Page1/Pg1Backgroundimage'
import Pg2profile from '../views/components/Page2/Pg2profile'
import Pg2txtprofilename from '../views/components/Page2/Pg2txtprofilename'
import Pg2txtsavedamount from '../views/components/Page2/Pg2txtsavedamount'
import Pg2energyleftindicator from '../views/components/Page2/Pg2energyleftindicator'
import Searchpgsearchingbox from '../views/components/SearchPage/Searchpgsearchingbox'
import Searchpgfilter from '../views/components/SearchPage/Searchpgfilter'
import Resultpgsearchingbox from '../views/components/ResultPage/Resultpgsearchingbox'
import Resultpgfilterchip from '../views/components/ResultPage/Resultpgfilterchip'
import Resultpgresultdata from '../views/components/ResultPage/Resultpgresultdata'

import {KeyboardAvoidingView} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import  { useState, useEffect } from 'react';
import { Animated } from 'react-native';

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


export default class SearchresultScreen extends Component {



  render(){
    return (
      <View style={{ flex: 1, }}>
  <FadeInView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}  behavior="height" enabled >


      <SafeAreaView style={styles.container}>
      <View style={styles.box1}>

              <Resultpgsearchingbox/>

      </View>



              <ScrollView style={styles.scrollView}  alwaysBounceVertical={false} bounces={false} >




                        <View style={styles.box2}>
                            <Resultpgfilterchip/>

                        </View>
                        <View style={styles.box3}>
                              <Resultpgresultdata/>
                                <Resultpgresultdata/>
                                  <Resultpgresultdata/>
                                    <Resultpgresultdata/>


                        </View>



                </ScrollView>
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


  box2:
  {
    flex:1,
    marginTop:10,

  },
  box3:
  {
    width:'100%',

    flex:1,


  },











});
