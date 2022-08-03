import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/USER/HomeScreen'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator();
const UserBottomTab = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        elevation: 0,
        backgroundColor: '#FFFFFF',
        //...styles.shadow,
      },
      tabBarHideOnKeyboard: true,
      //tabBarButton: buttonNativeFeedback,
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      listeners={({ navigation }) => ({
        tabPress: e => {
          e.preventDefault();
          navigation.navigate('Home');
        },
      })}
      options={{
        //cardStyleInterpolator: forFade,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
                <AntDesign name='home' size={20} 
                 color={focused ? 'green' : 'gray'}
                />
            <Text
              style={{
                color: focused ? 'green' : 'gray',
                fontSize: 9,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Home
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Home3"
      component={HomeScreen}
      listeners={({ navigation }) => ({
        tabPress: e => {
          e.preventDefault();
          navigation.navigate('Home');
        },
      })}
      options={{
        //cardStyleInterpolator: forFade,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
                <AntDesign name='home' size={20} 
                 color={focused ? 'green' : 'gray'}
                />
            <Text
              style={{
                color: focused ? 'green' : 'gray',
                fontSize: 9,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Home
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Home1"
      component={HomeScreen}
      listeners={({ navigation }) => ({
        tabPress: e => {
          e.preventDefault();
          navigation.navigate('Home');
        },
      })}
      options={{
        //cardStyleInterpolator: forFade,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
                <AntDesign name='home' size={20} 
                 color={focused ? 'green' : 'gray'}
                />
            <Text
              style={{
                color: focused ? 'green' : 'gray',
                fontSize: 9,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Home
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Home2"
      component={HomeScreen}
      listeners={({ navigation }) => ({
        tabPress: e => {
          e.preventDefault();
          navigation.navigate('Home');
        },
      })}
      options={{
        //cardStyleInterpolator: forFade,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
                <AntDesign name='home' size={20} 
                 color={focused ? 'green' : 'gray'}
                />
            <Text
              style={{
                color: focused ? 'green' : 'gray',
                fontSize: 9,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Home
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Home4"
      component={HomeScreen}
      
      options={{
        //cardStyleInterpolator: forFade,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
                <AntDesign name='home' size={20} 
                 color={focused ? 'green' : 'gray'}
                />
            <Text
              style={{
                color: focused ? 'green' : 'gray',
                fontSize: 9,
                fontFamily: 'Poppins-SemiBold',
              }}>
              More
            </Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
  )
}

export default UserBottomTab