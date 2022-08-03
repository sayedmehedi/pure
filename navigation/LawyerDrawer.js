import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View,Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingScreen from '../screen/SettingScreen';
import ProfileScreen from '../screen/ProfileScreen';
const Drawer = createDrawerNavigator();
import CustomHeader from '../components/header';
import LawyerCustomDrawer from '../components/LawyerCustomDrawer'


function HomeScreen(props) {
  return (
    <View style={{ flex: 1}}>
      <CustomHeader title="Home" isHome="true" navigation={props.navigation}/>
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Lawyer Home Screen</Text>
      </View>
    </View>
  );
}

export default function LawyerDrawer() {
  return (
    
    <Drawer.Navigator initialRouteName="MainTab" drawerContent={props => <LawyerCustomDrawer {...props} />} screenOptions = {{
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
    </Drawer.Navigator> 
    
  );
}