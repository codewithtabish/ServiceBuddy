import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { Divider } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation}  from '@react-navigation/native'

const BusinessCard = ({item}) => {
    const navigation=useNavigation()
    
  return (
    <TouchableOpacity
    // onPress={()=>navigation.navigate('HomeBusinessDetailScreen',{
        // bumsinessItem:item
    // })}
     className="bg-white p-2"
    style={{width:responsiveScreenWidth(60)}}>
        <View
        style={{width:"100%",height:responsiveScreenHeight(15)}}>

        <Image src={item?.images[0]?.url}
         className="w-full object-cover rounded-xl h-full"/>
         <LinearGradient
        colors={["transparent","rgba(0,0,0,.9)"]}
        style={{position:"absolute",bottom:0,
         height: "100%",
        //  borderRdius:12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    width:"100%",height:"100%"}}


        />
        </View>
     <View>
         <Text className=" font-bold mt-1"
         style={{fontFamily:"outfit"}}>
        {item?.name}
      </Text>

      <Text className="text-gray-700 text-sm "
      style={{fontFamily:"outfit",padding:1}}>{item?.contactPerson}</Text>
      <View className="   rounded-sm p-1 max-w-[55%] "
      style={{backgroundColor:"#ffd9e1"}}>
        <Text className="text-light-primary">{item?.category?.name}</Text>
      </View>
     </View>
    </TouchableOpacity>
  )
}

export default BusinessCard

const styles = StyleSheet.create({})