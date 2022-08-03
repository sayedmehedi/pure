import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screen/AUTH/LoginScreen';
import RegistrationSelectionScreen from '../../screen/AUTH/RegistrationSelectionScreen';
import UserRegistrationScreen from '../../screen/AUTH/UserRegistrationScreen';
import LawerRegistrationScreen from '../../screen/AUTH/LawerRegistrationScreen';
import LawyerRegistrationScreen from '../../../src/screen/AUTH/LawyerRegistrationScreen';
import ClientRegistrationScreen from '../../../src/screen/AUTH/ClientRegistrationScreen'



const Auth = createStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen name="login" component={LoginScreen}options={{headerShown:false}} />
      <Auth.Screen
        name="RegistrationSelectionScreen"
        component={RegistrationSelectionScreen}
        options={{headerShown:false}}
      />
      <Auth.Screen
        name="userRegistration"
        component={ClientRegistrationScreen}
        options={{headerShown:false}}
      />
      <Auth.Screen
        name="lawerRegistration"
        component={LawyerRegistrationScreen}
        options={{headerShown:false}}
      />
    </Auth.Navigator>
  );
};

export default AuthStack;
