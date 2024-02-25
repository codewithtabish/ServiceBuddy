import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'


const HomeBusinessCatCard = ({item}) => {
    const navigation=useNavigation()
  return (
    <TouchableOpacity className="my-2 rounded-md bg-white mx-4"
    onPress={()=>navigation.navigate('HomeBusinessDetailScreen',{
        businessItem:item
    })}>
       <View className="flex flex-row items-center mx-4  gap-3 p-2">
         <Image
     className="rounded-md"
     src={item?.images[0]?.url}
     style={{
        width:responsiveScreenWidth(35),
        height:responsiveScreenHeight(12)
     }}/>

     <View className="flex-col gap-1">
        <Text className="text-[10px] text-gray-950 font-bold"
        style={{fontFamily:"outfit"}}>{item?.contactPerson}</Text>
        <Text style={{fontFamily:responsiveScreenFontSize(2.4),
        fontFamily:"outfit-bold"}}>{item?.name}</Text>
        <View className="flex flex-row  ">
            <Ionicons name="location-sharp" size={24} color="pink" />
            <Text className="text-gray-900 text-sm font-bold ml-1">{item?.address}+"....."</Text>
        </View>
     </View>
       </View>

    </TouchableOpacity>
  )
}

export default HomeBusinessCatCard

const styles = StyleSheet.create({})