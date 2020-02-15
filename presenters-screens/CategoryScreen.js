import React , {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


import Editpgeditprofile from '../views/components/EditprofilePage/Editpgeditprofile'
import Editpgemailbox from '../views/components/EditprofilePage/Editpgemailbox'
import Editpgphbox from '../views/components/EditprofilePage/Editpgphbox'
import Editpgbtnupdate from '../views/components/EditprofilePage/Editpgbtnupdate'
import Categorypgbtnexit from '../views/components/CategoryPage/Categorypgbtnexit'
import Categorypgbtnrecent from '../views/components/CategoryPage/Categorypgbtnrecent'
import Categorypgbtnfavorite from '../views/components/CategoryPage/Categorypgbtnfavorite'
import Categorypgbtnlocation from '../views/components/CategoryPage/Categorypgbtnlocation'
import Categorypgbtnseeall from '../views/components/CategoryPage/Categorypgbtnseeall'


export default class CatergoryScreen extends Component {

  static navigationOptions = {
  title: "Profile",
  headerStyle: {
  backgroundColor: "#73C6B6"
  }
  };




  render(){
    return (

      <View style={styles.container}>


      <SafeAreaView style={styles.container}>
      <View style={styles.box1}>

      <View style={styles.b1flex1}>
      <Text style={styles.text}>Categories</Text>
      </View>
      <View style={styles.b1flex2}>
        <Categorypgbtnexit/>
      </View>

      </View>

      <View></View>
              <View style={styles.box2}>

                  <View style={styles.layer}>

                        <View style={styles.flex1}>
                                  <View style={styles.f1div1}>
                                    <Categorypgbtnrecent/>
                                  </View>
                                  <View style={styles.f1div2}>
                                    <Categorypgbtnfavorite/>
                                  </View>
                        </View>
                        <View style={styles.flex2}>
                                  <View style={styles.f2div1}>
                                    <Categorypgbtnlocation/>
                                  </View>
                                  <View style={styles.f2div2}>
                                    <Categorypgbtnseeall/>
                                  </View>

                        </View>

                  </View>

              </View>
              <View style={styles.box4}>

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
                  flex:2,
                  justifyContent:'center',


                },
                b1flex2:
                {
                  marginRight:19,
                  flex:1,

                  alignItems:'flex-end',
                  justifyContent:'center',


                },
  box2:
  {
      justifyContent:'flex-start',
      alignItems:'center',
      flex:1,

  },

          layer:
          {

            width:'90%',
            height:'77%',

          },
          flex1:
          {

            flexDirection:'row',
              flex:1,
          },

                    f1div1:
                    {
                      alignItems:'center',
                      justifyContent:'center',
                        flex:1,
                    },
                    f1div2:
                    {
                        alignItems:'center',
                        justifyContent:'center',
                        flex:1,
                    },
          flex2:
          {
            justifyContent:'space-between',
            flexDirection:'row',
              flex:1,
          },

                    f2div1:
                    {
                      alignItems:'center',
                      justifyContent:'center',
                        flex:1,
                    },
                    f2div2:
                    {
                        alignItems:'center',
                        justifyContent:'center',
                        flex:1,
                    },


  box4:
  {
    flex:1,


  },

});
