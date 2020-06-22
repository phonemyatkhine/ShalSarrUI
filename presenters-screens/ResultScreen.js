import React , {Component, useState, useEffect} from 'react'
import { StyleSheet, Text, View ,SafeAreaView, ScrollView } from 'react-native'
import SearchBox from '../views/components/ResultPage/SearchBox'
import FilterChip from '../views/components/ResultPage/FilterChip'
import ResultTab from '../views/components/ResultPage/ResultTab'
import {KeyboardAvoidingView} from 'react-native'
import { Animated } from 'react-native'

/////////////
ResultScreen.navigationOptions={

  headerShown: false,
  cardStyle:{
    backgroundColor:'#fff',
  }
}




// const FadeInView = (props) => {
//   const [fadeAnim] = useState(new Animated.Value(0))
//   React.useEffect(() => {
//     Animated.timing(
//       fadeAnim,
//       {
//         toValue: 1,
//         duration: 500,
//       }
//     ).start();
//   }, [])

//   return (
//     <Animated.View                 // Special animatable View
//       style={{
//         ...props.style,
//         opacity: fadeAnim,         // Bind opacity to animated value
//       }}
//     >
//       {props.children}
//     </Animated.View>
//   );
// }

export default function ResultScreen ({navigation})
{ 
  const [hasError, setErrors] = useState(false);
  const [shops, setShops] = useState({});

  async function fetchShopData() {
    const res = await fetch("http://192.168.100.19:8080/shop/");
    res
      .json()
      .then(res => setShops(res))
      .catch(err => setErrors(err));
  }

   React.useEffect(() => {
    fetchShopData()
   }, [])

    return (
      <View style={{ flex: 1, }}>
          <KeyboardAvoidingView style={styles.container}  behavior="height" enabled >
          <SafeAreaView style={styles.container}>
            <View style={styles.box1}>
              <SearchBox/>
            </View>
            <ScrollView style={styles.scrollView}  alwaysBounceVertical={false} bounces={false} >
              <View style={styles.box2}>
                <FilterChip/>
              </View>
              <View style={styles.box3}>
                <ResultTab/>
                <ResultTab/>
                <ResultTab/>
                <ResultTab/>
              </View>
            </ScrollView>
          </SafeAreaView>
          </KeyboardAvoidingView>
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex:1,
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
  box2:
  {
    flex:1,
    marginTop:10,
  },
  box3:
  {
    width:'100%',
    flex:1,
  },
});
