import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useUser } from "@clerk/clerk-expo";
import { Feather } from '@expo/vector-icons';


const HomeHeader = () => {
    const { isLoaded, isSignedIn, user } = useUser();

  return (
    <View>
      <View className="flex-row justify-between items-center px-3 py-2 ">
        {/* left */}
        <View className="flex ml-2 flex-row gap-3 items-center ">
            <Image source={{uri:user?.imageUrl}}
            className="w-12 h-12 rounded-full"/>
            <View className="flex-col ">
                <Text className="text-xs text-light-secondary italic">Welcome</Text>
                <Text className="text-xl text-light-text "
                style={{fontFamily:"outfit-bold"}}>{user?.fullName}</Text>
            </View>
        </View>
        <View>
            <TouchableOpacity
            >
            <Feather name="bookmark" size={24} color="black" />

            </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({})