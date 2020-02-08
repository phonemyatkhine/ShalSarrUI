import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Pg1btnLoginwithfacebook from '../views/components/Page1/Pg1btnLoginwithfacebook'
import Pg1txtShalsar from '../views/components/Page1/Pg1txtShalsar'
import Pg1Backgroundimage from '../views/components/Page1/Pg1Backgroundimage'
import Pg2profile from '../views/components/Page2/Pg2profile'
import Pg2txtprofilename from '../views/components/Page2/Pg2txtprofilename'
import Pg2txtsavedamount from '../views/components/Page2/Pg2txtsavedamount'
import Pg2energyleftindicator from '../views/components/Page2/Pg2energyleftindicator'
import Pg2mostvisitedrestaurant from '../views/components/Page2/Pg2mostvisitedrestaurant'

import Pg3searchbox from '../views/components/Page3/Pg3searchbox'
import Pg3restaurantcard from '../views/components/Page3/Pg3restaurantcard'
import Pg3restaurantcarddetail from '../views/components/Page3/Pg3restaurantcarddetail'
import Pg5btnsaved from '../views/components/Page5/Pg5btnsaved'
import Pg5btnaboutus from '../views/components/Page5/Pg5btnaboutus'
import Pg5btnhistory from '../views/components/Page5/Pg5btnhistory'
import Pg5btnlogout from '../views/components/Page5/Pg5btnlogout'
import Pg4btnfavouriteandsave from '../views/components/Page4/Pg4btnfavouriteandsave'
import Pg4imagebanner from '../views/components/Page4/Pg4imagebanner'
import Pg4QRscanner from '../views/components/Page4/Pg4QRscanner'
import Pg7savedcard from '../views/components/Page7/Pg7savedcard'
import Pg8historycard from '../views/components/Page8/Pg8historycard'
import Pg4transactioncomplete from '../views/components/Page4/Pg4transactioncomplete'
import Pg3promotionbar from '../views/components/Page3/Pg3promotionbar'




export default class LoginScreen extends Component {
  render(){
    return (

      <View style={styles.container}>

      <Pg1Backgroundimage/>


      </View>






    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },
});
