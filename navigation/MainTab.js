import React from 'react'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import HomeScreen from '../screen/HomeScreen';
import LawyerStackScreen from './stack/LawyerStackScreen';
import SearchScreen from '../screen/SearchScreen';
import ProfileStackScreen from '../navigation/stack/ProfileStackScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainTab =()=>{
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Lawyer') {
              iconName = 'school';
            }else if(route.name === 'Search'){
              iconName = 'search';
            }else if(route.name === 'Profile'){
              iconName = 'person-circle'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#32a895',
          tabBarInactiveTintColor: '#3d58a8',
          tabBarLabelStyle:{
            fontSize:14,
            marginBottom:3
          },
          tabBarStyle: { backgroundColor:'#fff'},
          headerShown: false
        })} 
        
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Lawyer" component={LawyerStackScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
  )
}


export default MainTab;
