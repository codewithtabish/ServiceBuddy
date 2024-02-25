import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native'


const CategoryCard = ({item}) => {
    const navigation=useNavigation()
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate("HomeBusinessByCat",{
        categoryName:item?.name
    })}
     className=" justify-center items-center flex-1"
    style={{width:responsiveWidth(20)}}>
        <Image src={item?.icon?.url?item?.icon?.url:"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" } className="w-12 h-12 rounded-full object-cover"/>
        {/* <Avatar.Image size={44} src={item?.icon?.url} /> */}
        <Text className="text-[10px] mt-1"
        style={{fontFamily:"outfit"}}>{item.name}</Text>

    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({})