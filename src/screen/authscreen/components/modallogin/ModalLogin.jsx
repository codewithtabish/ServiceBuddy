import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { Entypo } from '@expo/vector-icons';





const ModalLogin = () => {




  const java=()=>{
    console.log("ypppa")
  }


  return (
    <View className=""
    style={{height:responsiveScreenHeight(70)}}>
    
        <View style={{height:responsiveScreenHeight(50)}}>
            <Image source={require('../../../../../assets/images/loginmodal.png')}
            className="w-full object-contain"/>
        </View>

        
    </View>
  )
}

export default ModalLogin


