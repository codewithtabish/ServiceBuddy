import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import { responsiveWidth } from 'react-native-responsive-dimensions';


const CategoryCard = ({item}) => {
  return (
    <View className=" justify-center items-center flex-1"
    style={{width:responsiveWidth(23)}}>
        <Image src={item?.icon?.url} className="w-12 h-12 rounded-full object-cover"/>
        {/* <Avatar.Image size={44} src={item?.icon?.url} /> */}
        <Text className="text-[10px] mt-1"
        style={{fontFamily:"outfit"}}>{item.name}</Text>

    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({})