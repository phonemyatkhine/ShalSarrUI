import React from 'react';
import { TouchableOpacity, StyleSheet, Text , TextInput ,View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';





function Editpgphbox() {
  return (

    <View style= {styles.container}>

        <View style= {styles.layer}>
                <View style= {styles.box1}>
                    <Text style={styles.subheading}>Phone Number</Text>
                </View>
                <View style= {styles.box2}>
                      <View style= {styles.phbox}>
                      <TextInput
                         style={styles.input}
                         placeholder="Enter your new phone number..."
                         autoCapitalize="none"
                         autoCorrect={false}
                         keyboardType="number-pad"
                         returnKeyType="done"
                        clearButtonMode="while-editing"
                         blurOnSubmit={true}

                       />
                      </View>
                </View>
        </View>

    </View>

  );

}
export default Editpgphbox ;


const styles = StyleSheet.create ({

   container: {
    zIndex:1,
    alignItems: 'center',
   },

   subheading:
   {
     marginLeft:10,
      fontSize:15,

   },
   layer:
   {
      flexDirection:'column',
      width:'90%',
      height:78,
   },
   box1:
   {
      justifyContent:'center',
      flex:1,
   },
   box2:
   {
     justifyContent:'center',
      flex:3,
   },
   phbox:
   {
      justifyContent:'center',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      height:55,
      width:'100%',
   },
   input: {
    margin: 20,
    height: 55,

    fontSize: 16,
  },

})
