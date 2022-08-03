import {
  StyleSheet,
  Text,
  View,
  ScrollView,

} from 'react-native';
import React from 'react';

import {Button, TextInput} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import CustomHeader from '../components/header';



export default function NewPasswordUserScreen(props) {
  

  return (
    <ScrollView
      style="{{flex:1,backgroundColor:'#fff'}}"
      showsVerticalScrollIndicator={false}>
      <CustomHeader title="Change Password" navigation={props.navigation} />
      <Animatable.View animation="fadeInUpBig" style={styles.bottomView}>
        <View style={{padding: 30}}>
          {/* ============Text Input View ===========*/}
          <View style={{marginVertical: 20}}>
            <TextInput
              autoComplete="off"
              secureTextEntry={true}
              outlineColor="#2B3875"
              label="Enter New Password*"
              mode="outlined"
              placeholder="Registration Number"
              style={styles.textInput}
            />

            <TextInput
              autoComplete="off"
              secureTextEntry={true}
              outlineColor="#2B3875"
              label="Enter Confirm Password*"
              mode="outlined"
              placeholder="Registration Number"
              style={styles.textInput}
            />

            <Button
              icon="login"
              mode="contained"
              onPress={() => console.log('Pressed')}
              style={{fontWeight: 'bold'}}>
              <Text style={{fontFamily: 'RobotoSlab_800ExtraBold'}}>
                Change Password
              </Text>
            </Button>
          </View>
        </View>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bottomView: {
    flex: 1.5,
  },

  gorgetPassword: {
    marginBottom: 14,
    flexDirection: 'row',
  },
  SocialLiginView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 20,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  textInput: {
    height: 38,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontFamily: 'RobotoSlab_300Light',
  },
});
