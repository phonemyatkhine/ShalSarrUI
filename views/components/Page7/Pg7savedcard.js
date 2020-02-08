import React from 'react';
import { TouchableOpacity, StyleSheet, Text ,ImageBackground, View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/MaterialIcons';
function Pg7savedcard() {
  return (

    <View style= {styles.container}>

      <View style={styles.card}>
                <View style={styles.box1}>
                      <View style={styles.b1flex1}>

                            <ImageBackground source={require('../../../assets/backgroundimage/kfc.jpg')} style = {styles.background}>
                            </ImageBackground>

                      </View>
                      <View style={styles.b1flex2}>

                            <Text style= {styles.bold}>KFC</Text>
                            <Text style= {styles.text}>Junction Square</Text>

                      </View>
                </View>
                <View style={styles.box2}>

                </View>
                <View style={styles.box3}>
                <Iconfont style={styles.icon} name="close" size={24} color="#757575"/>

                </View>
      </View>
    </View>


  );

}
export default Pg7savedcard ;


const styles = StyleSheet.create ({

   container: {
     marginTop:8,
    zIndex:1,
    alignItems: 'center',
   },
  text:
  {

    color:'#757575',
    fontSize:14,

  },
  card:
  {
      flexDirection:'row',
      borderRadius:20,
      borderWidth:1,
      borderColor:'#e0e0e0',
      width:'90%',
      height:80,

  },
  box1:
  {

      flexDirection:'row',
      flex:400,
  },
  b1flex1:
  {
      alignItems:'flex-end',
      justifyContent:'center',
      flex:1,
  },
  b1flex2:
  {
      marginLeft:12,
      justifyContent:'center',
      flex:3,

  },
  box2:
  {
      marginTop:15,
      marginBottom:15,
      flex:1,
      backgroundColor:'#bdbdbd',
  },
  box3:
  {
    alignItems:'center',
    justifyContent:'center',
      flex:100,
  },
  background:
  {
      borderRadius:50,
      overflow:'hidden',
      width:50,
      height:50,
  },
  bold:
  {
    fontWeight:'bold',
    fontSize:14,
  },

})
