import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SettingScreen from '../screen/SettingScreen';
import ProfileScreen from '../screen/ProfileScreen';
import AdminCustomDrawer from '../components/AdminCustomDrawer'
import HomeScreen from '../screen/Admin/HomeScreen';
import CreateLawyerScreen from '../screen/Admin/CreateLawyerScreen';
import AdminNewsStack from '../screen/Admin/AdminNewsStack';
import MainAdminStack from '../screen/Admin/MainAdminStack';
import CreateNewsScreen from '../screen/Admin/CreateNewsScreen';

const Drawer = createDrawerNavigator();

export default function AdminDrawer() {
  return (
    
    <Drawer.Navigator initialRouteName="MainTab" drawerContent={props => <AdminCustomDrawer {...props} />} screenOptions = {{
      headerShown:false,
      headerStyle : {
        backgroundColor:'#6200EE',
      },
      headerTintColor : '#fff',

      headerTitleAlign: "center",
      drawerLabelStyle: {
        marginLeft: -25,
        fontSize: 15,
        fontFamily:'Roboto-Medium'
      },
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{
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
      <Drawer.Screen name="Create Lawyer" component={CreateLawyerScreen} options={{
        drawerIcon: ({color}) => (
          <AntDesign name="pluscircleo" size={22} color={color} />
        ),
      }}/>
      <Drawer.Screen name="Lawyer List" component={MainAdminStack} options={{
        drawerIcon: ({color}) => (
          <Ionicons name="list" size={22} color={color} />
        ),
      }}/>

      <Drawer.Screen name="News List" component={AdminNewsStack} options={{
        drawerIcon: ({color}) => (
          <Ionicons name="list-circle-outline" size={22} color={color} />
        ),
      }}/>

      <Drawer.Screen name="Create News" component={CreateNewsScreen} options={{
        drawerIcon: ({color}) => (
          <AntDesign name="plussquareo" size={22} color={color} />
        ),
      }}/>
      
    </Drawer.Navigator> 
    
  );
}