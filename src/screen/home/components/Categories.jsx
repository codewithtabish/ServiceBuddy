import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getCategories } from '../../../utils/GlobalApi'
import CategoryCard from './CategoryCard'
import { responsiveScreenWidth } from 'react-native-responsive-dimensions'

const Categories = () => {
    const [categories, setcategories] = React.useState([])
    const geTAllHomeCats=async()=>{
      const response=await  getCategories()
      setcategories(response?.categories)
        
    }

    React.useEffect(() => {
        geTAllHomeCats()
    
      return () => {
      }
    }, [])
    
  return (
    <View>
        <View className="flex flex-row justify-between items-center px-4 mb-2 mt-3">
            <Text className="text-xl text-black"
            style={{fontFamily:"outfit-bold"}}> Categories</Text>
            <TouchableOpacity>
                <Text className="text-gray-900 italic">View All</Text>
            </TouchableOpacity>
        </View>

        <FlatList
        style={{width:responsiveScreenWidth(100)}}
        data={categories}
        renderItem={({item,index})=>index<=3 && <CategoryCard item={item} key={index}/>}
        horizontal={true}
        showHorizontalScrollIndicator={false}
        // numColumns={4}

        />
     
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})

