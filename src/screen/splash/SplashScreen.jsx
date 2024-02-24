import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as MySplashScreen from 'expo-splash-screen';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign for animated icon
import {  SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useAuth } from "@clerk/clerk-expo";



MySplashScreen.preventAutoHideAsync();

const SplashScreen = ({ navigation }) => {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('../../../assets/fonts/Outfit-Regular.ttf'),
    'outfit-semi': require('../../../assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-bold': require('../../../assets/fonts/Outfit-Bold.ttf'),
  });
  
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const animatedValue = new Animated.Value(0);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await MySplashScreen.hideAsync();
    }
    setTimeout(() => {
      userId?navigation.navigate("BottomTabNavigator"):
        navigation.navigate("Welcome"); 
   
    
      // Navigate to HomeTab
    }, 3000); // 3 seconds delay
  }, [fontsLoaded, fontError, navigation]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const rotate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View onLayout={onLayoutRootView} className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center">
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Image
            source={require("../../../assets/logotwo.jpg")}
            style={{ width: 200, height: 200, resizeMode: "cover" }}
          />
        </Animated.View>
      </View>
      <View className="absolute bottom-8 left-5 right-5 ">
        <View className="flex flex-col gap-2 items-center justify-center">
          <Text className="text-2xl  black"
            style={{ fontFamily: "outfit-semi" }}>
            Welcome to ServicesHub
          </Text>
          <Text className="text-sm text-gray-800 italic tracking-wider max-w-[75%] text-center"
            style={{ fontFamily: "outfit" }}
            >
            Connecting Hearts, Creating Stories, Building Futures, Igniting Passions
          </Text>
        </View>
      </View>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({});

