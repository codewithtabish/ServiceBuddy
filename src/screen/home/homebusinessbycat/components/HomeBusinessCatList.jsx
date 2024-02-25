import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeBusinessCatCard from './HomeBusinessCatCard'


const HomeBusinessCatList = ({businessCatList}) => {
  return (
    <View>
        <FlatList
        data={businessCatList}
        renderItem={({item,index})=><HomeBusinessCatCard item={item}/>}
        verticalScrollIndicator={false}

        />
    </View>
  )
}

export default HomeBusinessCatList

const styles = StyleSheet.create({})