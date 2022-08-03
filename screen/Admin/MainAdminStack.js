import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LawyerDetails from './LawyerDetails';
import LawyerList from './LawyerList';

const AdminStack = createNativeStackNavigator();

 const MainAdminStack = ({navigation})=>(

    <AdminStack.Navigator initialRouteName="Lawyer" screenOptions = {{headerShown:false}}>
        <AdminStack.Screen name="Lawyer" component={LawyerList}/>
        <AdminStack.Screen name="LawyerDetails" component={LawyerDetails}/>
    </AdminStack.Navigator>

) 


export default MainAdminStack;


