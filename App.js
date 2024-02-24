import { LogBox, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import AuthModal from './src/screen/authscreen/AuthModal';
import MainFlow from './src/navigation/MainFlow';
import RootFile from './src/navigation';
import AuthFlow from './src/navigation/AuthFlow';
import Constants from "expo-constants"
import * as SecureStore from 'expo-secure-store';


LogBox.ignoreAllLogs()
console.log(Constants.expoConfig.extra.STRIPE_API_KEY)

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


const App = () => {
  return (
    <ClerkProvider publishableKey={"pk_test_c3VwZXItcmVpbmRlZXItOTUuY2xlcmsuYWNjb3VudHMuZGV2JA"}
    tokenCache={tokenCache}
    >
        <SafeAreaView style={{flex:1}}>
        <GestureHandlerRootView style={{flex:1}}>

        <PaperProvider>
          <RootFile/>
      
        </PaperProvider>

        </GestureHandlerRootView>
        


      </SafeAreaView>
    </ClerkProvider>
  )
}

export default App

const styles = StyleSheet.create({})