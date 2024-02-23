
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { AntDesign,Entypo,Ionicons,Fontisto,MaterialIcons ,MaterialCommunityIcons} from '@expo/vector-icons';
import { useColorScheme } from "nativewind";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import BookingStack from '../screen/booking/BookingStack';
import HomeStack from '../screen/home/HomeStack';
import ProfileStack from '../screen/profile/ProfileStack';



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
       const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
        
      <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeStack} 
       options={{
          title: 'Home',
            headerShown:false,
          tabBarIcon: ({ color,focused }) => (

            focused?
            <Entypo name="home" size={24} color={colorScheme=="light"?"#FF6584":"#D7385E"} />:
            <AntDesign name="home" size={24} color="gray" />    
            
          ),
         tabBarActiveTintColor:`${colorScheme==="dark"?"#D7385E":"#FF6584"}`,
          tabBarInActiveTintColor:"gray",

        }}
        />
        <Tab.Screen name="BookingStack" component={BookingStack} 
        options={{
          title: 'Favourite',
            headerShown:false,
              tabBarIcon: ({ color,focused }) => (

            focused?
            <Fontisto name="favorite" size={24}   color={colorScheme=="light"?"#FF6584":"#D7385E"} />
            :
            <FontAwesome name="bookmark-o" size={24} color="black" />
          ),
            tabBarActiveTintColor:`${colorScheme==="dark"?"#D7385E":"#FF6584"}`,
          tabBarInActiveTintColor:"gray",
        }}
        />
        <Tab.Screen name="ProfileStack" component={ProfileStack} 
         options={{
          title: 'Profile',
            headerShown:false,
              tabBarIcon: ({ color,focused }) => (

            focused?
           
            
            <Ionicons name="chatbubble" size={24} color={colorScheme=="light"?"#FF6584":"#D7385E"}/>:
             <MaterialCommunityIcons name="chat-outline" size={24} color="black" />
          ),
            tabBarActiveTintColor:`${colorScheme==="dark"?"#D7385E":"#FF6584"}`,
          tabBarInActiveTintColor:"gray",
        }}
        />

      </Tab.Navigator>

  )
}

export default BottomTabNavigator