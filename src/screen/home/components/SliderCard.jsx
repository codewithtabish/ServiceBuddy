import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
import { LinearGradient } from 'expo-linear-gradient'

const SliderCard = ({item,handleClick}) => {
      const {width,height}=Dimensions.get('window')
  return (
  <TouchableWithoutFeedback
  className="relative"
   onPress={()=>handleClick(item)}>
    <View className="ml-1">

        <Image
        className="rounded-3xl"
         source={{ uri: item?.image?.url || "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", }}
           style={{ width: width*.9, height:responsiveScreenHeight(20),
        resizeMode:"cover" }}
        />
        <LinearGradient
        colors={["transparent","rgba(0,0,0,.9)"]}
        style={{position:"absolute",bottom:0,
         height: "100%",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    width:"100%",height:"100%"}}


        />
        <View className="absolute bottom-6 left-4 justify-end h-[80%] ">
          <View className="space-y-1">
              <View className="max-h-[98%] max-w-[95%] ">
                <Text className="text-white font-semibold text-base capitalize "
                style={{}}>
                    {/* {item.name.length>60?item.name.slice(0,50)+"..."
                    :item.name.split(" - ")[0]||"N/A"
                    
                    } */}
                </Text>
                <Text className="text-neutral-300 text-sm font-medium mt-1">
                    
                    {/* {item?.name?.length>20?item?.name?.slice(0,20)+"...":item?.name} */}
                </Text>
                

            </View>
          </View>

        </View>

      

    </View>

  </TouchableWithoutFeedback>
  )
}

export default SliderCard

const styles = StyleSheet.create({})