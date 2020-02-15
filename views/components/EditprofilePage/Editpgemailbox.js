import React from 'react';
import { TouchableOpacity, StyleSheet, Text , TextInput ,View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';





function Editpgemailbox() {
  return (

    <View style= {styles.container}>

        <View style= {styles.layer}>
                <View style= {styles.box1}>
                    <Text style={styles.subheading}>Email</Text>
                </View>
                <View style= {styles.box2}>
                      <View style= {styles.mailbox}>
                      <TextInput
                         style={styles.input}
                         placeholder="Enter your new email..."
                         autoCapitalize="none"
                         autoCorrect={false}
                         keyboardType="default"
                         returnKeyType="default"
                        clearButtonMode="while-editing"
                         blurOnSubmit={true}

                       />
                      </View>
                </View>
        </View>

    </View>

  );

}
export default Editpgemailbox ;


const styles = StyleSheet.create ({

   container: {

    alignItems: 'center',
   },
   text:
   {
      marginLeft:20,
     fontSize:14,
     color:'#9e9e9e',

   },
   subheading:
   {
     marginLeft:10,
      fontSize:12,
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
   mailbox:
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
