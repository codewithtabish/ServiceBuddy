import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import HomeMainScreen from '../screen/home/homemain/HomeMainScreen';
import WelcomeScreen from '../screen/welcome/WelcomeScreen';
import SplashScreen from '../screen/splash/SplashScreen';
const Stack=createNativeStackNavigator()

const MainFlow = () => {
  return (

   <NavigationContainer>
         <Stack.Navigator initialRouteName="Splash">
            
  
          
            <Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator}
            options={{headerShown:false,presentation:'modal'}}/>
          
            <Stack.Screen name='Splash' component={SplashScreen}
            options={{headerShown:false,presentation:'modal'}}/>
          
           

        </Stack.Navigator>
     </NavigationContainer>
  )
}

export default MainFlow
