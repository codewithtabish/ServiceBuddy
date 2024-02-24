import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screen/welcome/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screen/splash/SplashScreen';

const Stack=createNativeStackNavigator()

const AuthFlow = () => {
  return (
     <NavigationContainer>
         <Stack.Navigator initialRouteName="Splash">
            

          
            <Stack.Screen name='Welcome' component={WelcomeScreen}
            options={{headerShown:false,presentation:'modal'}}/>
          
            <Stack.Screen name='Splash' component={SplashScreen}
            options={{headerShown:false,presentation:'modal'}}/>
           

        </Stack.Navigator>
     </NavigationContainer>
  )
}

export default AuthFlow

const styles = StyleSheet.create({})