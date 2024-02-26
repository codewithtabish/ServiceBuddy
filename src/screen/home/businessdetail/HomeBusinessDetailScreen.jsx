import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import {useRoute} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';
import DetailScreenPhoto from './components/DetailScreenPhoto';
import { Button } from 'react-native-paper';
import ConfirmBookingModal from './components/ConfirmBookingModal';

const HomeBusinessDetailScreen = ({}) => {
    const [readMore, setreadMore] = React.useState(false)
      const params=useRoute().params
      const {businessItem}=params
         const modalizeRef = React.useRef(null);

    const onOpen = (event) => {
      event.persist();
    modalizeRef.current?.open();
  };
  
  const onClose = () => {
    modalizeRef.current?.close();  // Use modalizeRef consistently
  };
//   console.log("businessItem?.id",businessItem?.id)



    return (
               <View className='flex-1'>
                  <ScrollView
                  style={{height:responsiveScreenHeight(95)}}>
                  <Image src={businessItem.images[0].url}
            style={{width:responsiveScreenWidth(100),
            height:responsiveScreenHeight(25)}}/> 
            <View className="mx-4 my-2">
                <Text style={{fontFamily:"outfit"}}
                className="text-2xl font-bold">{businessItem?.name}</Text>
                <View className="flex flex-col gap-1">
                    <Text className="text-sm py-1">{businessItem?.contactPerson}</Text>
                    <Text className="text-light-primary textsm font-bold">{businessItem?.category?.name} ⛅⛅</Text>
                    <View className="flex flex-row gap-1 items-center mb-1">
                          <Ionicons name="location-sharp" size={24} color="pink" />
                          <Text className="text-sm text-light-primary">{businessItem?.address}</Text>
                    </View>
                </View>
                <Divider/>
                <View className="mb-1">
                       <Text 
                      
                    //    numberOfLines={readMore?8:2}
                       style={{fontFamily:"outfit-semi"}}
                className="text-2xl font-semibold">About</Text>
                <Text className="text-gray-700 py-1"
                 numberOfLines={readMore?15:4} multiline>
                    {businessItem?.about}
                </Text>
                <TouchableOpacity
                onPress={()=>setreadMore(!readMore)}>
                    <Text className="text-light-primary mb-1 "
                    style={{fontFamily:"outfit"}}>Read More</Text>
                </TouchableOpacity>
                </View>
                <Divider/>
                <View className="mb-1">
                       <Text style={{fontFamily:"outfit-semi"}}
                className="text-2xl font-semibold">Photos</Text>
               
                </View>
                <DetailScreenPhoto businessItem={businessItem}/>


            </View>
             </ScrollView>
             <View className=" p-2 rounded-md flex justify-between items-center gap-3 flex-row
             mx-auto"
             style={{
                // height:responsiveScreenHeight(5),
             width:responsiveScreenWidth(80)}}>
                 <TouchableOpacity 
                 className="p-2 border-light-primary rounded-md text-black flex-1 border-2"
                 style={{}} onPress={() => console.log('Pressed')}>
                    <Text className="text-gray-700 text-center">Message</Text>
                
              </TouchableOpacity>
                 <TouchableOpacity 
                 className="p-2 bg-light-primary rounded-md text-white flex-1"
                 style={{}} onPress={ onOpen}
                 >
                    <Text className="text-white text-center">Book Now</Text>
                
              </TouchableOpacity>
               
               

             </View>
             <ConfirmBookingModal myRef={modalizeRef}
             businessItemId={businessItem.id}
             onClose={onClose}/>
               </View>


    )


 
}

export default HomeBusinessDetailScreen

const styles = StyleSheet.create({})