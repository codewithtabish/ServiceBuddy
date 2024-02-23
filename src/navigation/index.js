import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import WelcomeScreen from '../screen/welcome/WelcomeScreen';

const Stack=createNativeStackNavigator()

const index = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">

            <Stack.Screen name='TabNavigator' component={BottomTabNavigator}
            options={{headerShown:false,presentation:"modal"}}/>
            <Stack.Screen name='Welcome' component={WelcomeScreen}
            options={{headerShown:false,presentation:'modal'}}/>
        </Stack.Navigator>

        
    </NavigationContainer>
   
  )
}

export default index

const styles = StyleSheet.create({})