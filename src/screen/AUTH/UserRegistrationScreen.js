import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const UserRegistrationScreen = () => {
  return (
    <View>
      <Text>UserRegistrationScreen</Text>
    </View>
  )
}

export default UserRegistrationScreen
const styles = StyleSheet.create({
    brandView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4169e1',
      padding: 30,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      elevation: 4,
    },
    brandViewText: {
      color: '#fff',
      fontSize: 25,
      textTransform: 'uppercase',
      fontFamily: 'Roboto-Bold',
    },
  
    bottomView: {
      flex: 1,
      borderTopStartRadius: 50,
      borderTopEndRadius: 50,
      backgroundColor: '#EEF2FB',
    },
    textInput: {
      height: 38,
      backgroundColor: '#fff',
      fontFamily: 'Roboto-Medium',
    },
  });