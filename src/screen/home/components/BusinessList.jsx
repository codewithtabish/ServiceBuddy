import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { businnessQueryData } from '../../../utils/GlobalApi'
import BusinessCard from './BusinessCard'

const BusinessListData = () => {
    const [businessList, setbusinessList] = React.useState([])

    const getBusinessList=async()=>{
      const response=await  businnessQueryData()
      console.log(response)
      setbusinessList(response?.businessLists)
        
    }

    React.useEffect(() => {
        getBusinessList()
    
      return () => {
        second
      }
    }, [])
    
  return (
    <View className="m-4 ">
        <View className="flex flex-row justify-between items-center my-1">
            <Text className="text-xl font-bold"
            style={{fontFamily:"outfit"}}>Latest Business</Text>
            <TouchableOpacity>
            <Text className="text-gray-900 text-sm font-bold"> View All</Text>

            </TouchableOpacity>
        </View>
     <FlatList
  data={businessList}
  horizontal={true}
  showsHorizontalScrollIndicator={false}
  renderItem={({ item, index }) => <BusinessCard item={item} />}
/>

    
    </View>
  )
}

export default BusinessListData

const styles = StyleSheet.create({})