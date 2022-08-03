import React from 'react';
import {View,Text} from 'react-native';
import CustomHeader from '../components/header';



export default function SettingScreen(props) {
    return (
      <View style={{ flex: 1}}>
        <CustomHeader title="Settings" navigation={props.navigation}/>
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>SettingScreen!</Text>
        </View>
      </View>
    );
}
  