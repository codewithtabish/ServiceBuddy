import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookingMainScreen from './bookingmain/BookingMainScreen';


const Stack = createNativeStackNavigator();

const BookingStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='BookingMainScreen' component={BookingMainScreen}
        options={{headerShown:false}}/>
    </Stack.Navigator>
    
  )
}

export default BookingStack
