import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Pg2energyleftindicator from './Pg2energyleftindicator'

function Pg1txtsavedamount() {
  return (

    <View style= {styles.container}>
    <View style={styles.layer}>
        <View style={styles.box1}>
            <View style={styles.b1flex1}>
              <Text style= {styles.text}>Shal Points</Text>
            </View>
            <View style={styles.b1flex2}>
                <Pg2energyleftindicator/>
            </View>
        </View>
        <View style={styles.box2}>
        </View>
        <View style={styles.box3}>
              <View style={styles.b3flex1}>
                <Text style= {styles.text}>Saved Amount</Text>
              </View>
              <View style={styles.b3flex2}>
              <Text style= {styles.amounttext} >8000MMK</Text>
              </View>
        </View>
    </View>
    <View style={styles.bar}>

    </View>

    </View>

  );

}
export default Pg1txtsavedamount ;


const styles = StyleSheet.create ({

   container: {

    justifyContent:'center',
    alignItems:'center',

   },
   layer:
   {

     marginTop:35,
     flexDirection:'row',
     borderRadius:18,
     overflow:'hidden',
     width:317,
     height:80,
      backgroundColor:'#f5f5f5',
   },
  text:
  {

    color:'#000',
    fontSize:76,

  },
  box1:
  {

    flexDirection:'column',
    flex:100,


  },
  b1flex1:
  {
    justifyContent:'center',
    alignItems:'center',
      flex:1,
      marginTop:22,


  },
  b1flex2:
  {
    justifyContent:'center',
    alignItems:'center',
    flex:1,
      marginBottom:22,


  },
  box2:
  {
    marginTop:15,
    marginBottom:15,
    height:51,
    flex:1,
    alignItems:'center',
    backgroundColor:'#bdbdbd',

  },
  box3:
  {
    flex:100,


  },
  b3flex1:
  {
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    marginTop:22,


  },
  b3flex2:
  {
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    marginBottom:22,


  },
  text:
  {
    fontSize:14,
  },
  amounttext:
  {
     color:'#146CA3',
     fontWeight:'bold',
   },
   bar:
   {
     marginTop:24,
     width:25,
     height:5,
     borderRadius:100,
     backgroundColor:'#757575',
   },



})
