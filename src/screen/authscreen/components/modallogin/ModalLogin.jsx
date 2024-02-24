import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { Entypo } from '@expo/vector-icons';

const ModalLogin = () => {
  return (
    <View className=""
    style={{height:responsiveScreenHeight(70)}}>
        <View style={{height:responsiveScreenHeight(50)}}>
            <Image source={require('../../../../../assets/images/loginmodal.png')}
            className="w-full object-contain"/>
        </View>

        <View className="flex justify-center items-center ml-8 flex-row "
        style={{}}>
            <TouchableOpacity className="bg-light-primary p-2  rounded-md w-full mx-5 flex-row gap-4 justify-center">
                <Entypo name="google-" size={24} color="white" />
                <Text className="text-white text-center">Google</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default ModalLogin


