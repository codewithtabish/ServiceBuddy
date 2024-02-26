import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Modalize } from 'react-native-modalize'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import ModalHeader from './ModalHeader'
import ModalPicker from './ModalPicker'
import Suggestion from './Suggestion'
import { ModalContextProvider } from './ModalContextProvider'


const ConfirmBookingModal = ({myRef,businessItemId,onClose}) => {
  return (
      <ModalContextProvider>
      <Modalize ref={myRef} 
       modalHeight={responsiveScreenHeight(70)} // Set your desired height here
      >
        <ModalHeader/>
        <ModalPicker/>
        <Suggestion businessItemId={businessItemId}
        onClose={onClose}/>
       

  

       
       

         



      
      </Modalize>
    </ModalContextProvider>
  )
}

export default ConfirmBookingModal

const styles = StyleSheet.create({})