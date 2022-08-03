import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import React  from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, TextInput} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';



export default function NewPasswordScreen(props) {
 

  return (
    <ScrollView
      style="{{flex:1,backgroundColor:'#fff'}}"
      showsVerticalScrollIndicator={false}>
      <View style={styles.TopContainer}>
        <MaterialCommunityIcons
          name="shield-key-outline"
          size={20}
          color="#fff"
          style={{color: '#fff', fontSize: 120}}
        />
        <Text style={styles.brandViewText}>Reset Password</Text>
      </View>
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
              <Text style={{fontFamily: 'Roboto-Black'}}>Login</Text>
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
    fontFamily: 'Roboto-Medium',
  },
});
