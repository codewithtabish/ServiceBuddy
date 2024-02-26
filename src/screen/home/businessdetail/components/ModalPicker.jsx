import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CalendarPicker from "react-native-calendar-picker";
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import TimeSlots from './TimeSlotes';
import { Divider } from 'react-native-paper';
import { MyContext } from './ModalContextProvider';
import { ActivityIndicator, MD2Colors } from 'react-native-paper'

const ModalPicker = () => {
     const { selectedDate, setselectedDate, showIndicator,updateIndicator  } = React.useContext(MyContext);
    console.log(selectedDate)
  return (
    <View className="mx-auto"
    style={{
        width:responsiveScreenWidth(90),
    }}>
     <CalendarPicker onDateChange={(a)=>setselectedDate(a)} 
     todayBackgroundColor={"gray"}
     todayTextStyle={{color:"white"}}
     selectedDayColor={"#fff"}
     selectedDayStyle={{ backgroundColor: '#FF6584', color: 'white' }} // Adjusted selected day style
     minDate={Date.now()}/>

     <Divider/>
     <TimeSlots/>
      <View
        className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center"
        style={{
            width:responsiveScreenWidth(100),
            height:responsiveScreenHeight(50)
        }}>
        <ActivityIndicator animating={showIndicator} color={"#FF6584"}
        size='large'/>

        </View>
    
    </View>
  )
}

export default ModalPicker

const styles = StyleSheet.create({})