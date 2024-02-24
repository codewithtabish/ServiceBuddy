import { LogBox, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootFile from './src/navigation'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


LogBox.ignoreAllLogs()

const App = () => {
  return (
      <SafeAreaView style={{flex:1}}>
        <GestureHandlerRootView style={{flex:1}}>

        <PaperProvider>

      <RootFile/>

      
        </PaperProvider>

        </GestureHandlerRootView>
        


      </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})