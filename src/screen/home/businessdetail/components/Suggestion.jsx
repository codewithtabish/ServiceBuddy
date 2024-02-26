import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { MyContext } from './ModalContextProvider';
import { useUser } from '@clerk/clerk-expo';
import { createBokkingMutation } from '../../../../utils/GlobalApi';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native'

const Suggestion = ({businessItemId,onClose}) => {
       const { suggestion, setSuggestion,selectedTimeSlot,updateIndicator,
    selectedDate } = React.useContext(MyContext);
    const {user}=useUser()
    const navigation=useNavigation()

  const handleSuggestionChange = (text) => {
    setSuggestion(text);
  };

const handleBooking = async () => {
  try {
    if (!selectedTimeSlot || !selectedDate) {
      ToastAndroid.showWithGravityAndOffset(
        'Please fill date and time slots',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      return;
    }
    updateIndicator(true)

    const data = {
      userName: user?.fullName || '',
      userEmail: user?.primaryEmailAddress?.emailAddress || '',
      time: selectedTimeSlot,
      date: moment(selectedDate).format("DD-MMM-YYYY"),
      suggestion: suggestion || '',
      businessItemId: businessItemId || '',
    };


    const response = await createBokkingMutation(data);
    const {id:bookedId}=response?.createBooking
    if(!bookedId){
        
          ToastAndroid.showWithGravityAndOffset(
        'Booking Creation Error',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      updateIndicator(false)

        return
    }else{
        updateIndicator(false)
          ToastAndroid.showWithGravityAndOffset(
        'Booked Successfully ... 💕',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      onClose()
      navigation.goBack()
      return;
    }


    console.log('The mutation response is ', response);

    // Handle the response as needed

  } catch (error) {
    console.log('Handle Booking error is ', error);
    // Handle the error as needed
  }
}



  return (
    <View style={styles.container} className=" ">

      <TextInput
        className="border-light-secondary rounded-md"
        style={styles.input}
        numberOfLines={4}
        multiline={true}
        placeholder="Type your suggestion here"
        value={suggestion}
        onChangeText={handleSuggestionChange}
      />
     <View className="flex flex-row justify-center">
         <TouchableOpacity
         onPress={handleBooking}
      className="bg-light-primary p-3 rounded-lg  my-2 "
      style={{width:"70%",marginHorizontal:"auto"}}>
        <Text className="text-white  text-center">Confirm Booking</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    margin:0,
    marginHorizontal:16
  },
  input: {
    paddingVertical:2,
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 8,
    width: '100%', // 80% of the available width
    alignSelf: 'center', // Center horizontally
    paddingHorizontal:5
  },
    headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
});
