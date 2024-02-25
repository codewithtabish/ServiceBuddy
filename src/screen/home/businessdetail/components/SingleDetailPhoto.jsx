import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

const SingleDetailPhoto = ({item}) => {
  return (
    <View className=""
    style={{width:responsiveScreenWidth(50),
    height:responsiveScreenHeight(15)}}>
        <Image
        className="rounded-md m-2"
        style={{width:"90%",height:'99%'}}
        src={item?.url}/>
    </View>
  )
}

export default SingleDetailPhoto

const styles = StyleSheet.create({})