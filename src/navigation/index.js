import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  SignedIn, SignedOut } from "@clerk/clerk-expo";
import MainFlow from './MainFlow';
import AuthFlow from './AuthFlow';

const Stack=createNativeStackNavigator()

const RootFile = () => {
  return (
    <>
    <SignedOut>
      <AuthFlow/>
    </SignedOut>

    <SignedIn>
      <MainFlow/>
    </SignedIn>
    </>

        
   
  )
}

export default RootFile
