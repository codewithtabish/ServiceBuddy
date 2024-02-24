import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { forwardRef } from 'react';
import { Modalize } from 'react-native-modalize'
import ModalHeader from './components/ModalHeader';
import ModalLogin from './components/modallogin/ModalLogin';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { Entypo } from '@expo/vector-icons';
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();


const AuthModal =({myRef},ref) => {
     // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });


    const onGooglePress = React.useCallback(async () => {

    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);





  return (
      <>
      <Modalize ref={myRef}>
       <ModalHeader/>
       <ModalLogin/>

       
          <View className="absolute">
         <View className="flex justify-center items-center ml-8 flex-row "
        style={{height:responsiveScreenHeight(100)}}>
            <TouchableOpacity className="bg-light-primary p-2  rounded-md w-full mx-5 flex-row gap-4 justify-center"
            onPress={onGooglePress}
            >
                <Entypo name="google-" size={24} color="white" />
                <Text className="text-white text-center">Google</Text>
            </TouchableOpacity>
        </View>
   </View>

         



      
      </Modalize>
    </>
  );
}

export default AuthModal;

const styles = StyleSheet.create({});
