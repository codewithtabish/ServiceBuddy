import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileMainScreen from './profilemain/ProfileMainScreen';


const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='ProfileMainScreen' component={ProfileMainScreen}
        options={{headerShown:false}}/>
    </Stack.Navigator>
    
  )
}

export default ProfileStack
