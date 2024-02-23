import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import {LinearGradient} from 'expo-linear-gradient';

const WelcomeScreen = () => {
  return (
   <ImageBackground source={require('../../../assets/images/splahtwo.png')}
   className="flex-1  object-cover-full">
     <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.5)"]}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
        // start={{ x: 0.5, y: 0 }}
        // end={{ x: 0.5, y: 1 }}
      />
      <View className="mx-4 flex justify-between items-center w-fullrs flex-row mr-4">
        <View className=""></View>
        {/* <Text className="text-light-primary text-xl text-right mr-5 italic">login</Text> */}
      </View>
     
     <View className="absolute left-0 right-0 flex-row justify-center " 
     style={{height:responsiveScreenHeight(30),
    bottom:responsiveScreenHeight(5)}}>
    <View style={{width:responsiveScreenWidth(85),
  margin:"auto"}}>
      <Text 
      className="text-center text-light-primary font-bold italic"
      
      style={{fontSize:responsiveScreenFontSize(3.5),
      textAlign:"center"}}> Welcome to Service</Text>
      <Text style={{fontSize:responsiveScreenFontSize(2.1),width:responsiveScreenWidth(85),
      
      marginTop:responsiveScreenHeight(1.5)}} className="text-white italic text-center 
      leading-6 -tracking-tighter

      ">
        Connecting You with Trusted Service Professionals
      </Text>
      <TouchableOpacity 
        //  onPress={goToMain}
      className="bg-light-primary p-3 rounded-md "
      style={{width:responsiveScreenWidth(85),
        marginTop:responsiveScreenHeight(3)
        
    
      }}>
        <Text className="text-light-background italic text-center" 
        style={{fontSize:responsiveScreenFontSize(2.1),
        }}>
          Getting Started
        </Text>
      </TouchableOpacity>
    </View>

     </View>


    


   </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})