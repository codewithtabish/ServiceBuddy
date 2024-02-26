import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native'

const ModalHeader = () => {
    const navigation=useNavigation()
  return (
    <View className=" flex-row gap-3 items-center mt-2 mx-4"
    style={{
        margin:responsiveHeight(3)
    }}>
      <TouchableOpacity
      onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
        <Text className="text-xl font-bold"
        style={{
            fontFamily:"outfit"
        }}>Booking</Text>

    </View>
  )
}

export default ModalHeader

const styles = StyleSheet.create({})