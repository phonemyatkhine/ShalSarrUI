import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View,TextInput} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';





function Storepgconfirmnumber() {
  return (

    <View style= {styles.container}>
        <View style= {styles.confirmbox}>




        <TextInput
           style={styles.input}
           placeholder="Confirm your phone number..."
           autoCapitalize="none"
           autoCorrect={false}
           keyboardType="number-pad"
           clearButtonMode="while-editing"
           blurOnSubmit={true}

         />




        </View>
    </View>

  );

}
export default Storepgconfirmnumber ;


const styles = StyleSheet.create ({

   container: {
     marginTop:20,
     alignItems:'center',
     flex:1,

   },
   subtext:{
     marginLeft:20,
     color:'#9e9e9e',
     fontSize:14,
   },
   confirmbox:
   {

     justifyContent:'center',
     borderRadius: 15,
     borderWidth: 1,
     borderColor: '#E0E0E0',
     width:'90%',
     height:55,
   },
   input: {
    margin: 20,
    height: 55,

    fontSize: 16,
  },

})
