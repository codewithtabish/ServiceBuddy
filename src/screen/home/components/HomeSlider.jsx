import { getSliders } from '../../../utils/GlobalApi'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import SliderCard from './SliderCard'


const HomeSlider = () => {
    const [slider, setslider] = React.useState([])
       const {width,height}=Dimensions.get('window')

    const getSlidersData=async()=>{
       const data=  await getSliders()
       setslider(data?.sliders)
        
    }
    React.useEffect(() => {
        getSlidersData()
      
    }, [])



    
  return (
     <View>
      <Carousel
      data={slider}
      renderItem={({item})=><SliderCard item={item} />}
      sliderWidth={width*.9}
      itemWidth={width*.9}
      slideStyles={{display:"flex",
    alignItems:"center",
backgroundColor:"red"}}
      inActiveSlideScale={.86}
      firstItem={1}

      />
    </View>
  )
}

export default HomeSlider

const styles = StyleSheet.create({})