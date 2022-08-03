import React from 'react';
import AuthStack from './auth/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserBottomTab from './user/UserBottomTab';

const Stack = createStackNavigator();

const Navigators = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="auth"
            component={AuthStack}
            options={{ headerShown: false, }}
          />

           <Stack.Screen
            name="userTab"
            component={UserBottomTab}
            options={{ headerShown: false, }}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default Navigators;