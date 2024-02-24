import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useUser } from "@clerk/clerk-expo";
import HomeHeader from '../components/HomeHeader';
import { Divider } from 'react-native-paper';
import SearchBox from '../components/HomeSearch';


const HomeMainScreen = () => {
    const { isLoaded, isSignedIn, user } = useUser();
  return (
    <View className="flex-1 bg-white">
      <HomeHeader/>
      <SearchBox/>
       <Divider />

      <Text className="text-red-800">
        {user?.fullName.toString()} +"  "+ 
        {/* {user?.emailAddress.toString()} */}
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