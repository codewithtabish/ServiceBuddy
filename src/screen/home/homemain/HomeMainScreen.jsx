import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeMainScreen = () => {
  return (
    <View className="flex-1 justify-center items-center p-6">
      <Text className="text-red-800">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, vero fuga? Eveniet doloremque mollitia cupiditate minima laborum cumque quaerat rem, neque eaque vitae? Consequatur dolorem error tempora temporibus fugit itaque!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, vero fuga? Eveniet doloremque mollitia cupiditate minima laborum cumque quaerat rem, neque eaque vitae? Consequatur dolorem error tempora temporibus fugit itaque!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, vero fuga? Eveniet doloremque mollitia cupiditate minima laborum cumque quaerat rem, neque eaque vitae? Consequatur dolorem error tempora temporibus fugit itaque!
      </Text>
      <TouchableOpacity className="bg-light-primary p-3 rounded-md w-full">
        <Text className="text-white italic">
            Login
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeMainScreen

const styles = StyleSheet.create({})