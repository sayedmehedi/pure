import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LawyerScreen from '../../screen/LawyerScreen';
import LawyersDetails from '../../screen/LawyersDetails';

const LawyerStack = createNativeStackNavigator();

 const LawyerStackScreen = ({navigation})=>(

  <LawyerStack.Navigator initialRouteName="LawyerSt" screenOptions = {{headerShown:false}}>
    <LawyerStack.Screen name="LawyerSt" component={LawyerScreen}/>
    <LawyerStack.Screen name="LawyerDetails" component={LawyersDetails}/>
  </LawyerStack.Navigator>

 ) 

 export default LawyerStackScreen;