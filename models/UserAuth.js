import React , {Component} from 'react';
import {AsyncStorage} from 'react-native';
import * as Facebook from 'expo-facebook';


class UserAuth {
    
    setUserSession = async (data) => {
        try {
            await AsyncStorage.setItem('id',  JSON.stringify(data.id))
            await AsyncStorage.setItem('name',  JSON.stringify(data.name))
            await AsyncStorage.setItem('email', JSON.stringify(data.email))
            await AsyncStorage.setItem('profile', JSON.stringify(data.profile))
            await AsyncStorage.setItem('gender', JSON.stringify(data.gender))
            await AsyncStorage.setItem('location', JSON.stringify(data.location))
            await AsyncStorage.setItem('picture', JSON.stringify(data.picture))
            await AsyncStorage.setItem('ageRange', JSON.stringify(data.ageRange))
        } catch(error) {
            alert(error.message);
        };
    }

    sessionClear = async () => {
        try {
            AsyncStorage.clear();
        } catch (error) {
            alert.log(error.message)
        }
    }
    
    getUserId = async () => {
        try {
            const userId = await AsyncStorage.getItem('id')
            return JSON.stringify(userId)
        } catch(e) {
            alert.log(e.message)
        }
    }

    storeUser = async (data) => {

        try {
            fetch('http://192.168.43.66:8080/user/', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                userId :data.id,
                name :data.name,
                email :data.email,
                profile :data.link,
                gender :data.gender,
                location :data.location.name,
                picture :data.picture.data.url,
                ageRange :((data.age_range.max+data.age_range.min)/2),
                }),
            });
        } catch(error) {
            console.log(error.message);
        };
    
    }

    
    // getUserSession = async () => {

    // try {
    //     fetch('http://192.168.43.66:8080/user/', {
    //         method: 'POST',
    //         headers: {
    //            Accept: 'application/json',
    //            'Content-Type': "multipart/form-data",
    //         },
    //         body: JSON.stringify({
    //            userId : await AsyncStorage.getItem('id') ,
    //            name :await AsyncStorage.getItem('name'),
    //            email :await AsyncStorage.getItem('email'),
    //            profile :await AsyncStorage.getItem('profile'),
    //            gender :await AsyncStorage.getItem('gender'),
    //            location :await AsyncStorage.getItem('location'),
    //            picture :await AsyncStorage.getItem('picture'),
    //            ageRange :await AsyncStorage.getItem('ageRange'),
    //         }),
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
    //             return responseJson;
    //         }).catch((error) => {
    //             console.log(error.message);
    //         });
    //   } catch(e) {
    //     console.log(e)
    //   }
    // }

  login = async () => {
    try {
      await Facebook.initializeAsync('287641608838908');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile','email','user_age_range', 'user_location','user_link','user_gender'],
      });
      if (type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?fields=picture.width(200).height(200),name,gender,link,email,location,age_range&access_token=${token}`);
        const responseJson = await response.json();
        this.storeUser(responseJson);
        this.setUserSession(responseJson)
        const userId = await this.getUserId()
        //Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        alert("Login Error!! Please try again later.")
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

}
const user = new UserAuth()
export default user
