import React,{ useState } from 'react';
import { TouchableOpacity, StyleSheet, Text , View,TextInput, ScrollView} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Chip } from 'react-native-paper';
import RNPickerSelect , { defaultStyles } from 'react-native-picker-select';



function Searchpgfilter() {


  return (

    <View style= {styles.container}>

          <View style= {styles.layer}>
                <View style= {styles.box1}>
                    <Text style={styles.text}>Location</Text>
                </View>
                <View style= {styles.box2}>

                    <View style={styles.pickercontainer}>


                        <View style={styles.picker1}>


                             <RNPickerSelect
                                    placeholder={{
                                label: 'Select Location...',
                                value: null,
                                color: '#9e9e9e',
                              }}
                              onValueChange={(value) => console.log(value)}
                              items={[
                                  { label: 'Alone', value: 'Alone' },
                                  { label: 'Kyee Myint Dine', value: 'Kyee Myint Dine' },
                                  { label: 'Insein', value: 'Insein' },
                              ]}
                                    style={{
                                       ...pickerSelectStyles,

                                  placeholder: {

                                    color: '#212121',
                                    fontSize: 14,

                                  },
                                  onValueChange:
                                  {
                                    marginLeft:15,
                                    color: '#212121',
                                    fontSize: 14,

                                  },
                                }}
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'Alone', value: 'Alone' },
                                        { label: 'Kyee Myint Dine', value: 'Kyee Myint Dine' },
                                        { label: 'Insein', value: 'Insein' },
                                    ]}
                                />




                        </View>

                        <View style={styles.picker2}>

                              <Icon style={styles.icon} name="keyboard-arrow-down" size={24} color="#212121"/>



                        </View>






                        </View>

                </View>
                <View style= {styles.box3}>
                    <Text style={styles.text}>Promotion Percentage</Text>

                </View>
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} >
                <View style= {styles.box4}>
                        <Chip style={styles.chip}>
                          <Text style={styles.chipText}>10</Text>
                        </Chip>
                        <Chip style={styles.chip}>
                          <Text style={styles.chipText}>15</Text>
                        </Chip>
                        <Chip style={styles.chip}>
                          <Text style={styles.chipText}>20</Text>
                        </Chip>
                        <Chip style={styles.chip}>
                          <Text style={styles.chipText}>25</Text>
                        </Chip>
                        <Chip style={styles.chip}>
                          <Text style={styles.chipText}>30</Text>
                        </Chip>
                        <Chip style={styles.chip}>
                          <Text style={styles.chipText}>35</Text>
                        </Chip>
                        <Chip style={styles.chip}>
                          <Text style={styles.chipText}>40</Text>
                        </Chip>
                        <Chip style={styles.chip}>
                          <Text style={styles.chipText}>45</Text>
                        </Chip>
                        <Chip style={styles.chip}>
                          <Text style={styles.chipText}>50</Text>
                        </Chip>
                </View>
            </ScrollView>
          </View>
    </View>


  );

}
export default Searchpgfilter ;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height:'100%',



 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const styles = StyleSheet.create ({

   container: {
     flexDirection:'row',
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
   },
  pickercontainer:
  {
      flexDirection:'row',
      justifyContent:'center',
      backgroundColor:'#fff',
      borderRadius:100,

      height: 50,
  },
  picker1:
  {
      marginLeft:15,
      justifyContent:'center',
      flex:8,

  },
  picker2:
  {
    marginRight:5,
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },

  text:
  {
    fontWeight:'bold',
    color:'#212121',
    fontSize:14,

  },
  layer:
  {

    borderRadius:15,
    width: '95%',
    height: 220,
    backgroundColor:'#f5f5f5',

  },
  box1:
  {
    marginLeft:10,
    justifyContent:'flex-end',
    flex:1,
  },
  box2:
  {
    marginLeft:10,
    marginRight:10,
    justifyContent:'center',
    alignItems:'center',
    flex:3,

  },
  box3:
  {
    marginLeft:10,
    justifyContent:'flex-end',
    flex:1,

  },
  box4:
  {

    alignItems:'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    flex:3,
  },
  chip: {

    alignItems:'center',
    justifyContent:'center',
     backgroundColor: "#fff",
     width:50,
     height:50,
     borderRadius:100,
     margin: 5
   },
   chipText: {
     fontSize:14,
     color: "#000"
   }

})
