import React from 'react';
import { View,Text} from 'react-native-animatable';
import CustomHeader from '../components/header';

//=================Settings Component===============

export default function UserDetailsScreen(props) {
    return (
      <View style={{ flex: 1}}>
        <CustomHeader title="User Details" navigation={props.navigation}/>
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>UserDetailsScreen!</Text>
        </View>
      </View>
    );
}