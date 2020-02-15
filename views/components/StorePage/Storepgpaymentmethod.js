import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View,ImageBackground} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';





function Storepgpaymentmethod() {
  return (

    <View style= {styles.container}>
              <View style= {styles.layer}>
                        <View style= {styles.option1}>
                              <View style= {styles.op1flex1}>
                                  <Text style={styles.subtext}>1,000MMK</Text>
                              </View>
                              <View style= {styles.op1flex2}>
                                    <ImageBackground source={require('../../../assets/backgroundimage/mpt.png')} style = {styles.background}>
                                    </ImageBackground>
                              </View>
                        </View>
                        <View style= {styles.option2}>
                              <View style= {styles.op2flex1}>
                              <Text style={styles.subtext}>1,000MMK</Text>

                              </View>
                              <View style= {styles.op2flex2}>
                                      <ImageBackground source={require('../../../assets/backgroundimage/ooredoo.png')} style = {styles.background}>
                                      </ImageBackground>
                              </View>
                        </View>
                        <View style= {styles.option3}>
                                <View style= {styles.op3flex1}>
                                <Text style={styles.subtext}>1,000MMK</Text>

                                </View>
                                <View style= {styles.op3flex2}>
                                        <ImageBackground source={require('../../../assets/backgroundimage/telenor.png')} style = {styles.background}>
                                        </ImageBackground>
                                </View>
                        </View>
              </View>
    </View>

  );

}
export default Storepgpaymentmethod ;


const styles = StyleSheet.create ({

   container: {
     marginTop:20,
     alignItems:'center',
     flex:1,
   },
   background:{
      width:62,
      height:27,

   },
   subtext:
   {
      fontSize:14,
      fontWeight:'bold',
   },
   layer:
   {
     alignItems:'center',
     justifyContent:'space-between',

     height:175,

   },
   option1:
   {
      flexDirection:'row',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      width:'90%',
      height:55,

   },

        op1flex1:
        {
            marginLeft:10,
            alignItems:'flex-start',
            justifyContent:'center',
            flex:1,
        },
        op1flex2:
        {
          marginRight:10,
          justifyContent:'center',
          alignItems:'flex-end',
          flex:1,
        },


   option2:
   {
     flexDirection:'row',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      width:'90%',
      height:55,
   },

          op2flex1:
          {
              marginLeft:10,
              alignItems:'flex-start',
              justifyContent:'center',
              flex:1,
          },
          op2flex2:
          {
            flex:1,
            marginRight:10,
            justifyContent:'center',
            alignItems:'flex-end',

          },

   option3:
   {
     flexDirection:'row',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      width:'90%',
      height:55,

   },
          op3flex1:
          {
              marginLeft:10,
              alignItems:'flex-start',
              justifyContent:'center',
              flex:1,
          },
          op3flex2:
          {
            marginRight:10,
            justifyContent:'center',
            alignItems:'flex-end',
            flex:1,
          },




})
