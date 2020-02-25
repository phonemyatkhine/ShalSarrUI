import React , {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import LoginWithFacebookBtn from '../views/components/FacebookLoginPage/LoginWithFacebookBtn'
import ShalSarrText from '../views/components/FacebookLoginPage/ShalSarrText'
import UserAuth from '../models/UserAuth'

LoginScreen.navigationOptions={
  headerShown: false,
  cardStyle:{
    backgroundColor:'#fff',
  }
}

export default function LoginScreen ({navigation})
{ 

  login = async () => {
    await UserAuth.login()
    navigation.navigate('AppNavigator');
  }
  
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/backgroundimage/bgimg.jpg')} style = {styles.background}>
          <ShalSarrText/>
          <LoginWithFacebookBtn onPress={login}/>
          <View style={styles.layer}>
          </View>
        </ImageBackground>
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },

  background:
  {

    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%',

  },
  layer:
  {
    position:'absolute',
    zIndex:0,
   alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    backgroundColor:'#000',
    opacity: 0.5,

  },

});
