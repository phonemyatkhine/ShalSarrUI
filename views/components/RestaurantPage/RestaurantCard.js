import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/MaterialIcons';
import RestaurantCardDetails from './RestaurantCardDetails'
import PromotionBar from './PromotionBar'

function RestaurantCard(props) {
  return (
    <TouchableOpacity onPress={props.passPress}> 
    <View style= {styles.container} >
        <View style={styles.card}>
            <View style={styles.cardflex1}>
                  <ImageBackground source={{uri: 'http://192.168.100.19:8080/image/'+props.shop.picPath}} style = {styles.background}>
                  </ImageBackground>
            </View>
            <View style={styles.cardflex2}>

                <RestaurantCardDetails shop={props.shop}/>

            </View>
            <View style={styles.cardflex3}>

              <PromotionBar 
                firstPromo={props.shop.firstPromo} 
                secondPromo={props.shop.secondPromo} 
                thirdPromo={props.shop.thirdPromo}
              />

            </View>


        </View>

    </View>
    </TouchableOpacity>
  );

}
export default RestaurantCard   ;


const styles = StyleSheet.create ({

   container: {
     flexDirection:'row',
    zIndex:1,
    justifyContent:'center',
    alignItems: 'center',
   },
   background:
   {

     width:"100%",
     height:"100%",
     borderTopLeftRadius: 20,
     borderTopRightRadius: 20,
     overflow:'hidden',



   },
   card:
   {

      backgroundColor:'#fff',
      flexDirection:'column',
      width:'95%',
      height:470,
      borderRadius:20,
      shadowColor: '#212121',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 2,
      elevation: 5,

   },
   cardflex1:
   {
      flex:3,



   },
   cardflex2:
   {
      marginLeft:19,
      flex:2,
      justifyContent:'center',
   },
   cardflex3:
   {
     
     marginBottom:3,
     alignItems:'center',
     justifyContent:'center',
     height:50,
   },


})
