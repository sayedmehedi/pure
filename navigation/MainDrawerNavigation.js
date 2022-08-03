import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainTab from './MainTab';
import SettingScreen from '../screen/SettingScreen';
import ProfileScreen from '../screen/ProfileScreen';
import CustomDrawer from '../components/CustomDrawer';
const Drawer = createDrawerNavigator();

 export default function MainDrawerNavigation() {
  return (
    
    <Drawer.Navigator initialRouteName="MainTab" drawerContent={props => <CustomDrawer {...props} />} screenOptions = {{
      headerShown:false,
      headerStyle : {
        backgroundColor:'#6200EE',
      },
      headerTintColor : '#fff',

      headerTitleAlign: "center",
      drawerLabelStyle: {
        marginLeft: -25,
        fontSize: 15,
      },
      }}>
      <Drawer.Screen name="Home Page" component={MainTab} options={{
        drawerIcon: ({color}) => (
          <Ionicons name="home-outline" size={22} color={color} />
        ),
      }}/>
      <Drawer.Screen name="Settings Page" component={SettingScreen} options={{
        drawerIcon: ({color}) => (
          <Ionicons name="settings-outline" size={22} color={color} />
        ),
      }}/>
      <Drawer.Screen name="Profile Page" component={ProfileScreen} options={{
        drawerIcon: ({color}) => (
          <Ionicons name="ios-person-outline" size={22} color={color} />
        ),
      }}/>
    </Drawer.Navigator> 
    
  );
}