import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { MyContext } from './ModalContextProvider';

const Suggestion = () => {
       const { suggestion, setSuggestion,selectedTimeSlot,updateIndicator,
    selectedDate } = React.useContext(MyContext);
//   const [suggestion, setSuggestion] = useState('');
console.log(suggestion)

  const handleSuggestionChange = (text) => {
    setSuggestion(text);
  };

  const handleBooking=()=>{
    try {
        if(!selectedTimeSlot||!selectedDate){

       ToastAndroid.showWithGravityAndOffset(
      'please fill date and time slots',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
          return
        }
        updateIndicator()

        // when complete
        setTimeout(() => {
             console.log("The data is ",
        suggestion,selectedDate,selectedTimeSlot
        )
        updateIndicator()
            
        }, 3000);
       


        
    } catch (error) {
        console.log("Handle Booking error is ",error)
        
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
