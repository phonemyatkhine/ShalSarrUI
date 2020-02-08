import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View,Box} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Pg2txtprofilename() {
  return (

    <View style= {styles.container}>

          <View style={styles.box1}>
            <Text style={styles.subheading}>Phone Myat Khine</Text>

          </View>
          <View style={styles.box2}>

                  <View style={styles.b2row1}>
                      <Icon style={styles.icon} name="email-outline" size={24} color="#146CA3"/>
                  </View>
                  <View style={styles.b2row2}>
                    <Text style={styles.text}>phonemyatkhine88@gmail.com</Text>
                  </View>

          </View>


          <View style={styles.box3}>

                <View style={styles.b3row1}>
                    <Icon style={styles.icon} name="phone" size={24} color="#146CA3"/>
                </View>
                <View style={styles.b3row2}>
                    <Text style={styles.text}>0925002380</Text>
                </View>

          </View>



    </View>


  );

}
export default Pg2txtprofilename ;


const styles = StyleSheet.create ({

   container: {



    width:375,
    height:124,


   },
   box1:
   {

     alignItems:'center',


   },
   box2:
   {
     marginLeft:40,
     marginRight:40,
     marginTop:24,
     flexDirection:'row',
     alignItems:'center',



   },
   b2row1:
   {
     flex:1,
     justifyContent:'center',


   },
   b2row2:
   {
     flex:6,
     justifyContent:'center',


   } ,
   box3:
   {
     marginLeft:40,
     marginRight:40,
      marginTop:20,
     flexDirection:'row',
     alignItems:'center',



   },
   b3row1:
   {
     flex:1,
     justifyContent:'center',

   },
   b3row2:
   {
     flex:6,
     justifyContent:'center',


   } ,
   subheading:
   {

     fontSize:24,
     fontWeight:'bold',
   },
   text:
   {

      fontSize:16,

   },



})
