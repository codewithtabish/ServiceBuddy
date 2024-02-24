import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo,AntDesign } from '@expo/vector-icons';


const ModalHeader = () => {

    const java=()=>{
    console.log("ypppa")
  }

  return (
      <View className="p-0 rounded-3xl">

    <View className="p-1 m-2">
    <AntDesign name="arrowleft" size={24} color="gray" 
    className="py-3 pl-3 ml-3"/>
     <View style={{ padding: 0 }}
     className="flex-row flex justify-center items-center ">
         
          <Text className="text-gray-700 text-sm italic max-w-[70%] mx-auto text-center">
            Welcome to our services app! We invite you to create your free profile to unlock exclusive features.
          </Text>
          {/* Add any additional content or customization here */}
        </View>
        <View className="flex-row justify-center items-center py-1">
            <Entypo name="dot-single" size={24} color="white" />
            <Entypo name="dot-single" size={24} color="white" />
            <Entypo name="dot-single" size={24} color="white" />
            

        </View>
        
    </View>

    </View>
  )
}

export default ModalHeader

const styles = StyleSheet.create({})