import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootFile from './src/navigation'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
      <SafeAreaView style={{flex:1}}>
        

      <RootFile/>

      </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})