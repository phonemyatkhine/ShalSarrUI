import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/MaterialIcons';
import Pg3restaurantcarddetail from './Pg3restaurantcarddetail'
import Pg3promotionbar from './Pg3promotionbar'

function Pg3restaurantcard() {
  return (

    <View style= {styles.container}>
        <View style={styles.card}>
            <View style={styles.cardflex1}>
                  <ImageBackground source={require('../../../assets/backgroundimage/shwebel.jpg')} style = {styles.background}>
                  </ImageBackground>
            </View>
            <View style={styles.cardflex2}>

                <Pg3restaurantcarddetail/>

            </View>


        </View>

    </View>

  );

}
export default Pg3restaurantcard   ;


const styles = StyleSheet.create ({

   container: {
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
      width:330,
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
      flex:10,



   },
   cardflex2:
   {
      marginLeft:27,
      flex:9,




   },


})
