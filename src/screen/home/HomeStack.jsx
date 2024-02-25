import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeMainScreen from './homemain/HomeMainScreen';
import HomeBusinessByCategoryList from './homebusinessbycat/HomeBusinessByCategoryList';
import HomeBusinessDetailScreen from './businessdetail/HomeBusinessDetailScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
    >
        <Stack.Screen name='HomeMainScreen' component={HomeMainScreen}
        options={{headerShown:false,
        presentation:"modal"}}/>
        <Stack.Screen name='HomeBusinessByCat' component={HomeBusinessByCategoryList}
        options={{headerShown:false,
        presentation:"modal"}}/>
        <Stack.Screen name='HomeBusinessDetailScreen' component={HomeBusinessDetailScreen}
        options={{headerShown:false,
        presentation:"modal"}}/>
    </Stack.Navigator>
 
  )
}

export default HomeStack

const styles = StyleSheet.create({})