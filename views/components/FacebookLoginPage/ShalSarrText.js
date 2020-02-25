import React,{ useState }from 'react';
import { TouchableOpacity, StyleSheet, Text , View,TextInput} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


const fetchFonts = () => {
return Font.loadAsync({
'Satisfy-Regular': require('../../../assets/fonts/Satisfy-Regular.ttf'),
});
};


function Pg1txtShalsar() {
  const[dataLoaded,setDataLoaded] = useState(false);
  const [value, onChangeText] = React.useState('Useless Placeholder');

  if(!dataLoaded){
    return(
      <AppLoading
       startAsync={fetchFonts}
       onFinish={()=> setDataLoaded (true)}
       />
    );

  }

  return (

    <View style= {styles.container}>
      <Text style={styles.text}> Shal Sarr </Text>
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

     fontFamily: "Satisfy-Regular",
    color:'#fff',
    fontSize:76,

  },
  input: {
    backgroundColor:'#f5f5f5',
   margin: 20,
   marginBottom: 0,
   width:337,
   height: 34,
   paddingHorizontal: 10,
   borderRadius: 4,
   borderColor: '#ccc',
   borderWidth: 1,
   fontSize: 16,
 },

})
