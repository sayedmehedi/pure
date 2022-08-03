import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from '../../screen/ProfileScreen';
import EditProfileScreen from '../../screen/EditProfileScreen';
import NewPasswordUserScreen from '../../screen/NewPasswordUserScreen';

 const ProfileStack = createNativeStackNavigator();

 const ProfileStackScreen = ({navigation})=>(

    <ProfileStack.Navigator initialRouteName="LawyerSt" screenOptions = {{headerShown:false}}>
        <ProfileStack.Screen name="ProfileStack" component={ProfileScreen}/>
        <ProfileStack.Screen name="EditProfileScreen" component={EditProfileScreen}/>
        <ProfileStack.Screen name="NewPasswordUserScreen" component={NewPasswordUserScreen}/>
    </ProfileStack.Navigator>

) 


export default ProfileStackScreen;
