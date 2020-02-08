import React from 'react';
import { TouchableOpacity, StyleSheet, Text ,ImageBackground, View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/MaterialIcons';
function Pg8historycard() {
  return (

    <View style= {styles.container}>

      <View style={styles.card}>
                <View style={styles.box1}>
                        <View style={styles.b1flex1}>
                              <ImageBackground source={require('../../../assets/backgroundimage/lotteria.jpeg')} style = {styles.background}>
                              </ImageBackground>
                        </View>
                        <View style={styles.b1flex2}>
                                <Text style={styles.bold}>Lotteria</Text>
                                <Text>Junction Square</Text>

                        </View>
                </View>
                <View style={styles.box2}>
                        <View style={styles.b2flex1}>
                                <View style={styles.b2f1div1}>
                                <Icon style={styles.icon} name="calendar-blank" size={24} color="#757575"/>


                                </View>
                                <View style={styles.b2f1div2}>
                                <Text style={styles.text}>13 Jan 2020</Text>

                                </View>

                        </View>
                        <View style={styles.b2flex2}>

                        </View>
                        <View style={styles.b2flex3}>
                                <View style={styles.b2f3div1}>
                                <Icon style={styles.icon} name="clock-outline" size={24} color="#757575"/>


                                </View>
                                <View style={styles.b2f3div2}>
                                <Text style={styles.text}>11:12 AM</Text>

                                </View>
                        </View>

                </View>

      </View>
    </View>


  );

}
export default Pg8historycard ;


const styles = StyleSheet.create ({

   container: {
     marginTop:8,
    zIndex:1,
    alignItems: 'center',
   },
   icon:
   {
      color:'#212121',
   },

  text:
  {

    color:'#757575',
    fontSize:14,

  },
  card:
  {

      borderRadius:20,
      borderWidth:1,
      borderColor:'#e0e0e0',
      width:337,
      height:210,

  },
  box1:
  {

      flexDirection:'row',
      flex:3,


  },
              b1flex1:
              {
                    alignItems:'center',
                    justifyContent:'center',
                    flex:2,

              },
              b1flex2:
              {
                    justifyContent:'center',
                    flex:2,

              },


  box2:
  {
      flexDirection:'row',
      flex:2,
  },

            b2flex1:
            {

                flex:100,

            },
                      b2f1div1:
                      {

                          justifyContent:'flex-end',
                          alignItems:'center',
                          flex:1,

                      },
                      b2f1div2:
                      {
                        justifyContent:'flex-start',
                        alignItems:'center',
                        flex:1,

                      },
            b2flex2:
            {
                marginTop:15,
                marginBottom:15,
                flex:1,
                backgroundColor:'#e0e0e0',
            },

            b2flex3:
            {

                flex:100,

            },

                      b2f3div1:
                      {
                          justifyContent:'flex-end',
                          alignItems:'center',
                          flex:1,

                      },
                      b2f3div2:
                      {
                          justifyContent:'flex-start',
                          alignItems:'center',
                          flex:1,

                      },






  background:
  {
      borderRadius:50,
      overflow:'hidden',
      width:75,
      height:75,
  },
  bold:
  {
    fontWeight:'bold',
    fontSize:14,
  },

})
