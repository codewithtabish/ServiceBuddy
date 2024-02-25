import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useRoute,useNavigation} from '@react-navigation/native'
import { businessByCategory } from '../../../utils/GlobalApi'
import HomeBusinessCatList from './components/HomeBusinessCatList'
import { Entypo } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';

const HomeBusinessByCategoryList = ({}) => {
    const [businessCatList, setbusinessCatList] = React.useState([])
    const navigation=useNavigation()

    const {categoryName}=useRoute()?.params
    const getBusinessListByCategory=async()=>{
        const response=await businessByCategory(categoryName)
        // console.log(response.)
        setbusinessCatList(response?.businessLists)

    }

    React.useEffect(() => {
      getBusinessListByCategory()
    
      return () => {
      }
    }, [])
    
  return (
    <View classNmae="">
      <View className="m-4 py-1">
          <View className="flex flex-row justify-between items-center  py-1">
            <TouchableOpacity
            onPress={()=>navigation.goBack()}>
                <Entypo name="arrow-long-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{fontFamily:"outfit"}}
            className="text-xl text-gray-700">{categoryName}</Text>
        </View>
        <Divider/>
      </View>
      <HomeBusinessCatList businessCatList={businessCatList}/>
    </View>
  )
}

export default HomeBusinessByCategoryList

const styles = StyleSheet.create({})