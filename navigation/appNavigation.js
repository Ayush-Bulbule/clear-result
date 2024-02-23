import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/OnBoarding/WelcomeScreen';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import SignupScreen from '../screens/Authentication/SignupScreen';
const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>

        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />

        <Stack.Screen name="Dashboard/Home" options={{ headerShown: false }} component={HomeScreen} />

        <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}