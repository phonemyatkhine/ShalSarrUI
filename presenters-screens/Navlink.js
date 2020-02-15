import * as React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantsScreen from './RestaurantsScreen'
import CategoryScreen from './CategoryScreen'

function HomeScreen({ navigation, route }) {

  return (
    <RestaurantsScreen/>
  );
}

function CreatePostScreen({ navigation, route }) {

  return (
      <CategoryScreen/>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
