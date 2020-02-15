import React , {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


import Editpgeditprofile from '../views/components/EditprofilePage/Editpgeditprofile'
import Editpgemailbox from '../views/components/EditprofilePage/Editpgemailbox'
import Editpgphbox from '../views/components/EditprofilePage/Editpgphbox'
import Editpgbtnupdate from '../views/components/EditprofilePage/Editpgbtnupdate'
import Icon from 'react-native-vector-icons/Ionicons';


export default class EditprofileScreen extends Component {
  render(){
    return (

      <View style={styles.container}>


      <SafeAreaView style={styles.container}>
      <View style={styles.box1}>

              <View style={styles.b1flex1}>

                  <Icon style={styles.icon} name="ios-arrow-back" size={24} color="#212121"/>

              </View>
              <View style={styles.b1flex2}>

                    <Text style={styles.text}>Edit Profile</Text>

              </View>
              <View style={styles.b1flex3}>

              </View>

      </View>



              <View style={styles.box2}>
                  <Editpgeditprofile/>
              </View>
              <View style={styles.box3}>

                      <View style={styles.b3flex1}>

                        <Editpgemailbox/>
                      </View>
                      <View style={styles.b3flex2}>

                        <Editpgphbox/>
                      </View>

              </View>
              <View style={styles.box4}>

                <Editpgbtnupdate/>
              </View>





          </SafeAreaView>

      </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,


  },
  subheading:
  {
      marginLeft:19,
      color:'#757575',
  },
  text:
  {


    fontSize:34,
    fontWeight:'bold',

  },
  box1:
  {
    flexDirection:'row',
    height:67,




  },
          b1flex1:
          {
            marginLeft:19,
            flex:1,
            justifyContent:'center',

          },
          b1flex2:
          {

            flex:7,

            alignItems:'flex-start',
            justifyContent:'center',


          },
          b1flex3:
          {
            marginRight:19,
            flex:1,
            alignItems:'flex-end',
            justifyContent:'center',


  },
  box2:
  {
      justifyContent:'center',
      flex:1,
  },

  box3:
  {
    flex:1,
  },
          b3flex1:
          {
              justifyContent:'flex-start',
              flex:2,

          },
          b3flex2:
          {
              justifyContent:'flex-start',
              flex:3,

          },
  box4:
  {
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end',


  },


});
