import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from '../../screen/ProfileScreen';
import EditProfileScreen from '../../screen/EditProfileScreen';
import NewPasswordUserScreen from '../../screen/NewPasswordUserScreen';

 const AdminStack = createNativeStackNavigator();

 const ProfileStackScreen = ({navigation})=>(

    <AdminStack.Navigator initialRouteName="LawyerSt" screenOptions = {{headerShown:false}}>
        <AdminStack.Screen name="ProfileStack" component={ProfileScreen}/>
        <AdminStack.Screen name="EditProfileScreen" component={EditProfileScreen}/>
        <AdminStack.Screen name="NewPasswordUserScreen" component={NewPasswordUserScreen}/>
    </AdminStack.Navigator>

) 


export default ProfileStackScreen;
