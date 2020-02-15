import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';





function Storepgshalpointpackage() {
  return (

    <View style= {styles.container}>

            <View style= {styles.layer}>

                      <View style= {styles.card1}>
                                <View style= {styles.c1flex1}>
                                        <View style= {styles.shalpoint}>

                                        </View>
                                </View>
                                <View style= {styles.c1flex2}>
                                    <Text style={styles.subtext}>One Shal Point</Text>
                                </View>
                      </View>
                      <View style= {styles.card2}>
                                <View style= {styles.c2flex1}>
                                    <View style= {styles.shalpoint}>

                                    </View>
                                    <View style= {styles.space}>

                                    </View>
                                    <View style= {styles.shalpoint}>

                                    </View>
                                </View>
                                <View style= {styles.c2flex2}>
                                  <Text style={styles.subtext}>Two Shal Points</Text>
                                </View>
                      </View>

                      <View style= {styles.card3}>
                                <View style= {styles.c3flex1}>
                                      <View style= {styles.shalpoint}>

                                      </View>
                                      <View style= {styles.space}>

                                      </View>
                                      <View style= {styles.shalpoint}>

                                      </View>
                                      <View style= {styles.space}>

                                      </View>
                                      <View style= {styles.shalpoint}>

                                      </View>
                                </View>
                                <View style= {styles.c3flex2}>
                                    <Text style={styles.subtext}>Three Shal Points</Text>
                                </View>
                      </View>
            </View>
    </View>

  );

}
export default Storepgshalpointpackage ;


const styles = StyleSheet.create ({

   container: {
     marginTop:20,
     alignItems:'center',
    flex:1,
   },

  subtext:{

    color:'#757575',
    fontSize:12,
  },
  shalpoint:
  {


      width:20,
      height:20,
      borderRadius:50,
      backgroundColor:'#146CA3',

  },
  space:
  {

      width:3,
      height:20,


  },
  layer:
  {

      alignItems:'center',
      justifyContent:'space-between',
      flexDirection:'row',
      width:'90%',

  },
  card1:{
      flexDirection:'column',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      width:'30%',
      height:120,
  },

          c1flex1:
          {

            justifyContent:'flex-end',
            alignItems:'center',
              flex:1,
          },
          c1flex2:
          {
            justifyContent:'center',
            alignItems:'center',
            flex:1,

          },


  card2:{
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      width:'30%',
      height:120,
  },

          c2flex1:
            {
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'flex-end',
                flex:1,
            },
            c2flex2:
            {
              justifyContent:'center',
              alignItems:'center',
              flex:1,

            },

  card3:{
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      width:'30%',
      height:120,
  },

              c3flex1:
                {
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'flex-end',
                    flex:1,
                },
                c3flex2:
                {
                  justifyContent:'center',
                  alignItems:'center',
                  flex:1,

                },

})
