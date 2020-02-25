import React , {Component} from 'react';
import { StyleSheet, Text, View ,SafeAreaView, ScrollView } from 'react-native';

import Searchpgsearchingbox from '../views/components/SearchPage/Searchpgsearchingbox'
import Searchpgfilter from '../views/components/SearchPage/Searchpgfilter'

import {KeyboardAvoidingView} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import  { useState, useEffect } from 'react';
import { Animated } from 'react-native';

/////////////
SearchScreen.navigationOptions={

  headerShown: false,
  cardStyle:{
    backgroundColor:'#fff',
  }
}



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


export default function SearchScreen ({navigation})
{
    return (
      <View style={{ flex: 1, }}>
  <FadeInView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}  behavior="height" enabled >


      <SafeAreaView style={styles.container}>
      <View style={styles.box1}>

              <Searchpgsearchingbox/>

      </View>



      <ScrollView style={styles.scrollView}  bounces={false} >
              <View style={styles.box2}>
                      <Searchpgfilter/>

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


  },











});
