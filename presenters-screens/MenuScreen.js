import React , {Component} from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native';

import Pg5btnaboutus from '../views/components/Page5/Pg5btnaboutus'
import Pg5btncontactus from '../views/components/Page5/Pg5btncontactus'

import Pg5btnlogout from '../views/components/Page5/Pg5btnlogout'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import  { useState, useEffect } from 'react'
import { Animated } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/MaterialIcons';



MenuScreen.navigationOptions={

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





export default function MenuScreen ({navigation})
{
  const editprofilepressHandler= () => {
    navigation.navigate('editprofile');

  }
  const savedpressHandler= () => {
    navigation.navigate('saved');

  }
  const historypressHandler= () => {
    navigation.navigate('history');

  }


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

                      <Ripple style={styles.btncontainer} onPress={editprofilepressHandler}>
                                <View style={styles.btncontainer1}>

                                    <View style = {styles.button}>

                                    <Iconfont style={styles.icon} name="edit" size={24} color="#212121"/>

                                    </View>


                                </View>
                                <View style={styles.btncontainer2}>
                                <Text style = {styles.btntext}>Edit Profile</Text>

                                </View>
                      </Ripple>

                      <Ripple style={styles.btncontainer}  onPress={savedpressHandler}>
                                <View style={styles.btncontainer1}>

                                    <View style = {styles.button}>

                                    <Icon style={styles.icon} name="bookmark" size={24} color="#212121"/>

                                    </View>


                                </View>
                                <View style={styles.btncontainer2}>
                                <Text style = {styles.btntext}>Saved</Text>

                                </View>
                      </Ripple>

                      <Ripple style={styles.btncontainer} onPress={historypressHandler} >
                                <View style={styles.btncontainer1}>

                                    <View style = {styles.button}>

                                    <Icon style={styles.icon} name="history" size={24} color="#212121"/>

                                    </View>


                                </View>
                                <View style={styles.btncontainer2}>
                                <Text style = {styles.btntext}>History</Text>

                                </View>
                      </Ripple>
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
//////
btntext:
{
  fontSize:18,
  color:'#000',

},
btncontainer:{

  height:75,
   flexDirection:'row',




},
btncontainer1:
{
   alignItems:'center',
   justifyContent:'center',
   flex:1,



},
btncontainer2:
{
   alignItems:'flex-start',
   justifyContent:'center',

   flex:3,
   borderBottomColor: '#eee',
   borderBottomWidth: 1,


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
  fontWeight:'bold',
  color:'#146CA3',
},










});
