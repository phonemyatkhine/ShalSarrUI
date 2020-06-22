import React , {Component} from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView,Alert, Button } from 'react-native';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/MaterialIcons';
import RestaurantCard from '../views/components/RestaurantPage/RestaurantCard'
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
const FadeInView = (props,{navigation}) => {
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



  const RenderShops = (props,{navigation}) => {

    const [hasError, setErrors] = useState(false);
    const [shops, setShops] = useState([]);
    
  const fetchShopData = async () => {
        try {
          const res = await fetch("http://192.168.100.19:8080/shop/");
          setShops(( await res.json()))
         // console.log( JSON.stringify(res.json()))
        } catch (error) {
          console.log(error)
        }
          
    }
    
    React.useEffect(() => {
      fetchShopData()
    }, [])
    // "__v": 0,
    // "_id": "5e56becf9339d75a4dc67a48",
    // "email": "lamenmonster@gmail.com",
    // "firstPromo": "15",
    // "location": "mmplacca",
    // "minimumDining": 4000,
    // "name": "Ramen Monster",
    // "password": "password",
    // "picPath": "ramenmonster.jpg",
    // "secondPromo": "20",
    // "shopDetails": "Best Lamen In town",
    // "thirdPromo": "35",

    var data =  shops.map(function (shop, index, array) {
          return (
                <View style={styles.box3} >
                  
                    <RestaurantCard key={shop._id} shop={shop} passPress={props.passPress}/>
                  
                </View>
              
          )
    });
    return data
      // return(
      //   <View>
      //     <View style={styles.box3}>
      //       <RestaurantCard/>
      //     </View>
      //     <View style={styles.box3}>
      //       <RestaurantCard/>
      //     </View>
      //     <View style={styles.box3}>
      //       <RestaurantCard/>
      //     </View>
      //   </View>
      // )
    //   // var data = JSON.stringify(shops)


    // shops.map(shop => {
    //   return (
    //     <View style={styles.box2}>
    //       <RestaurantCard/>
    //     </View>
    //   )
    // });
  }

export default function RestaurantsScreen ({navigation})
{

    const pressHandler= () => {
        navigation.navigate('screen2');
    }
    const searchboxpressHandler= () => {
      navigation.navigate('ResultScreen');
    }
    const detailPressHandler = () => {
      navigation.navigate('DetailRestaurantScreen')
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
              <RenderShops passPress={detailPressHandler}/>
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
    marginBottom: 12.5,
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
      marginTop:12.5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:12.5,





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
