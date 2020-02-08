import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';

function Pg2energyleftindicator() {
  return (

    <View style= {styles.container}>
      <View style={styles.layer}>


            <View style={styles.box1}>
                  <View style={styles.b1energy1}>

                  </View>

            </View>
            <View style={styles.box2}>
                  <View style={styles.b2energy2}>

                  </View>
            </View>

            <View style={styles.box3}>
                  <View style={styles.b3energy3}>

                  </View>
            </View>


      </View>


    </View>

  );

}
export default Pg2energyleftindicator ;


const styles = StyleSheet.create ({

   container: {
     
    zIndex:1,
    alignItems: 'center',
   },

  layer:
  {
    flexDirection:'row',
    width:34,
    height:10,

  },
  box1:
  {
    alignItems:'center',
    flex:1,
    width:10,
    height:10,


  },
  box2:
  {
    alignItems:'center',
    flex:1,
    width:10,
    height:10,


  },
  box3:
  {
    alignItems:'center',

    flex:1,
    width:10,
    height:10,

  },
  b1energy1:
  {

    borderRadius:50,
    width:10,
    height:10,
    backgroundColor:'#146CA3',
  },
  b2energy2:
  {
    borderRadius:50,
    width:10,
    height:10,
    backgroundColor:'#146CA3',
  },
  b3energy3:
  {


    borderRadius:50,
    width:10,
    height:10,
    backgroundColor:'#bdbdbd',
  },
  text:
  {fontSize:10,}
  ,

})
