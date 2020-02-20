import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function Pg3promotionbar() {
  return (

    <View style= {styles.container}>
        <View style={styles.bar}>
              <View style={styles.textarea}>
              <Text style={styles.smallboldtext}>Promotion*</Text>

              </View>
              <View style={styles.promo1}>
                    <View style={styles.p1flex1}>

                        <Icon style={styles.icon} name="circle-slice-3" size={24} color="#e0e0e0"/>

                    </View>
                    <View style={styles.p1flex2}>

                        <Text style={styles.smalltext}>10%</Text>

                    </View>
              </View>
              <View style={styles.promo2}>
                      <View style={styles.p2flex1}>

                          <Icon style={styles.icon} name="circle-slice-5" size={24} color="#d63031"/>

                      </View>
                      <View style={styles.p2flex2}>

                          <Text style={styles.smalltext}>20%</Text>

                      </View>
              </View>
              <View style={styles.promo3}>
                      <View style={styles.p3flex1}>

                          <Icon style={styles.icon} name="circle-slice-8" size={24} color="#e0e0e0"/>

                      </View>
                      <View style={styles.p3flex2}>

                          <Text style={styles.smalltext}>30%</Text>

                      </View>
              </View>

        </View>
    </View>

  );

}
export default Pg3promotionbar ;


const styles = StyleSheet.create ({

   container: {
    flex:1,
   },
   smalltextcolor:
   {
     fontSize:8,
     color:'#d63031',
   },
   smalltext:
   {
      color:'#757575',
      fontSize:8,

   },
   smallboldtext:
   {

      color:'#212121',
      fontSize:14,
   },
   bar:
   {
     flex:1,
     flexDirection:'row',
     backgroundColor:'#f5f5f5',
     borderRadius:18,
      width:"98%",
      height:50,

   },
  textarea:
  {
    marginLeft:20,
    justifyContent:'center',
    flex:1,


  },
  promo1:
  {
    flexDirection:'column',
    flex:1,
  },
          p1flex1:
          {
            justifyContent:'flex-end',
            alignItems:'center',
            flex:2,
          },
          p1flex2:
          {

            flex:1,

            alignItems:'center',


          },

  promo2:
  {
    flex:1,

  },

          p2flex1:
          {
            justifyContent:'flex-end',
            alignItems:'center',
            flex:2,

          },
          p2flex2:
          {

            flex:1,
            alignItems:'center',


          },
  promo3:
  {
    flex:1,

  },

          p3flex1:
          {
            justifyContent:'flex-end',
            alignItems:'center',
            flex:2,

          },
          p3flex2:
          {

            flex:1,
            alignItems:'center',

          },


})
