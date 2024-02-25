import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SingleDetailPhoto from './SingleDetailPhoto'

const DetailScreenPhoto = ({businessItem}) => {
  return (
    <View className="flex-1">
        <FlatList
        data={businessItem?.images}
        verticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item,index})=><SingleDetailPhoto item={item}
        keyExtractor={(item, index) => index.toString()}
        />}/>
    </View>
  )
}

export default DetailScreenPhoto

const styles = StyleSheet.create({})