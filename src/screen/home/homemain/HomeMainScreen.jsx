import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useUser } from "@clerk/clerk-expo";
import HomeHeader from '../components/HomeHeader';
import { Divider } from 'react-native-paper';
import SearchBox from '../components/HomeSearch';
import HomeSlider from '../components/HomeSlider';
import Categories from '../components/Categories';
import BusinessListData from '../components/BusinessList';


const HomeMainScreen = () => {
    const { isLoaded, isSignedIn, user } = useUser();
  return (
    <View className="flex-1 bg-white">
      <HomeHeader/>
      <SearchBox/>
       <Divider />
       <HomeSlider/>
       <Categories/>
       <BusinessListData/>

    
    </View>
  )
}

export default HomeMainScreen

const styles = StyleSheet.create({})