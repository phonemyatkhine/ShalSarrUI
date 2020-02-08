import React from 'react';
import { TouchableOpacity, StyleSheet, Text ,View,ImageBackground} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import {Card} from 'react-native-shadow-cards';

function Pg2mostvisitedrestaurant() {
  return (

    <View style= {styles.container}>
      <View style={styles.layer}>
        <Text style={styles.subheading}>Most Visited Restaurants</Text>

        <View style={styles.box1}>
                  <View style={styles.b1flex1}>
                      <ImageBackground source={require('../../../assets/backgroundimage/kfc.jpg')} style = {styles.background}>
                      </ImageBackground>

                  </View>
                  <View style={styles.b1flex2}>
                        <View style={styles.b1flex2div1}>
                          <Text style={styles.bold}>KFC</Text>
                        </View>
                        <View style={styles.b1flex2div2}>
                            <Text>Junction Square</Text>
                        </View>
                  </View>
        </View>
        <View style={styles.box2}>
                <View style={styles.b2flex1}>
                    <ImageBackground source={require('../../../assets/backgroundimage/lotteria.jpeg')} style = {styles.background}>
                    </ImageBackground>

                </View>
                <View style={styles.b2flex2}>
                      <View style={styles.b2flex2div1}>
                        <Text style={styles.bold}>Lotteria</Text>
                      </View>
                      <View style={styles.b2flex2div2}>
                          <Text>Junction City</Text>
                      </View>
                </View>
        </View>
        <View style={styles.box3}>
                <View style={styles.b3flex1}>
                    <ImageBackground source={require('../../../assets/backgroundimage/tealand.png')} style = {styles.background}>
                    </ImageBackground>

                </View>
                <View style={styles.b3flex2}>
                      <View style={styles.b3flex2div1}>
                        <Text style={styles.bold}>Tea Land</Text>
                      </View>
                      <View style={styles.b3flex2div2}>
                          <Text>Myanmar Plaza</Text>
                      </View>
                </View>
        </View>

      </View>


    </View>

  );

}
export default Pg2mostvisitedrestaurant ;


const styles = StyleSheet.create ({

   container: {
     marginBottom:100,
     fontSize:14,
     marginTop:22,

    alignItems: 'center',
   },
   layer:
   {

      flexDirection:'column',
      alignItems:'center',
      backgroundColor:'#fff',
      shadowColor: '#212121',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 2,
      elevation: 5,
      borderRadius:20,

      width:297,
      height:397,
   },
  subheading:
  {

    marginTop:37,
    marginBottom:13,
    fontWeight:'bold',
    color:'#000',
    fontSize:18,

  },
  box1:
  {
    flexDirection:'row',

    flex:1,


  },
        b1flex1:
        {
          flex:1,
          alignItems:'center',
          justifyContent:'center',

        },


        b1flex2:
        {
          flex:1,

        },
              b1flex2div1:
              {
                justifyContent:'flex-end',
                flex:1,

              },
              b1flex2div2:
              {
                flex:1,

              },
  box2:
  {
    flexDirection:'row',

    flex: 1,

  },
          b2flex1:
            {
              flex:1,
                alignItems:'center',
              justifyContent:'center',

            },


            b2flex2:
            {

              flex:1,

            },
                b2flex2div1:
                {
                  justifyContent:'flex-end',
                  flex:1,

                },
                b2flex2div2:
                {
                  flex:1,

                },
  box3:
  {
    flexDirection:'row',

    flex:1,

  },

              b3flex1:
                {
                  flex:1,
                  alignItems:'center',
                  justifyContent:'center',

                },


                b3flex2:
                {

                  flex:1,

                },
                    b3flex2div1:
                    {
                      justifyContent:'flex-end',
                      flex:1,

                    },
                    b3flex2div2:
                    {
                      flex:1,

                    },

  background:
  {
    overflow:'hidden',
borderRadius:50,
    width:75,
    height:75,
  },
  bold:
  {
    fontWeight:'bold',
    fontSize:14,
  },


})
