import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, TextInput} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

export default function ForGetPasswordScreen(props) {
 

  return (
    <ScrollView
      style="{{flex:1,backgroundColor:'#fff'}}"
      showsVerticalScrollIndicator={false}>
      <View style={styles.TopContainer}>
        <MaterialCommunityIcons
          name="shield-key-outline"
          size={20}
          color="#fff"
          style={{color: '#fff', fontSize: 110}}
        />
        <Text style={styles.brandViewText}>Recover Password</Text>
        <Ionicons
          name="arrow-back"
          size={20}
          color="#fff"
          style={{color: '#fff', fontSize: 30}}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.bottomView}>
        <View style={{padding: 30}}>
          {/* ============Text Input View ===========*/}
          <View style={{marginVertical: 20}}>
            <TextInput
              label="Enter Phone Number"
              autoCapitalize={'none'}
              maxLength={11}
              mode="outlined "
              style={{height: 47, marginBottom: 15}}
              keyboardType="numeric"
            />

            <Button
              icon="login"
              mode="contained"
              onPress={() => props.navigation.navigate('RecoverPasswordOtp')}
              style={{fontWeight: 'bold'}}>
              <Text style={{fontFamily: 'Roboto-Black'}}>Next</Text>
            </Button>
          </View>
        </View>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  TopContainer: {
    flex: 3,
    backgroundColor: '#4169e1',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height / 2.5,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    elevation: 5,
  },
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandViewText: {
    color: '#fff',
    fontSize: 25,
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Black',
  },

  bottomView: {
    flex: 1.5,
    justifyContent: 'center',
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
});
