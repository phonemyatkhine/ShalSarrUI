import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';





function Pg1txtShalsar() {
  return (

    <View style= {styles.container}>
      <Text style={styles.text}>Shal Sar</Text>
    </View>

  );

}
export default Pg1txtShalsar ;


const styles = StyleSheet.create ({

   container: {
    zIndex:1,
    alignItems: 'center',
   },
  text:
  {

    color:'#fff',
    fontSize:76,

  },

})
