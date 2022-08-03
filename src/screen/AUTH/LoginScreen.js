import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button, TextInput, List, Checkbox} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';


const LoginScreen = ({navigation}) => {
  const [remenberMe, SetRememberMe] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [data, SetData] = useState({
    username: '',
    password: '',
    userValidation: true,
    passwordValidation: true,
  });

  const onChangeUserHandle = value => {
    SetData({
      ...data,
      username: value,
      userValidation: true,
    });
  };

  const onChangePasswordHandle = value => {
    SetData({
      ...data,
      password: value,
      passwordValidation: true,
    });
  };
  const loginHandle = (userName, password) => {
    if (userName !== '' && password !== '') {
      //signIn(userName, password);
    } else {
      if (userName === '') {
        SetData({
          ...data,
          userValidation: false,
        });
      } else if (password === '') {
        SetData({
          ...data,
          passwordValidation: false,
        });
      }
    }
  };
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
      <Text style={styles.brandViewText}>Login</Text>
    </View>
    <Animatable.View animation="fadeInUpBig" style={styles.bottomView}>
      <View style={{padding: 30}}>
        <Text
          style={{
            color: '#4632a1',
            fontSize: 34,
            fontFamily: 'Roboto-Black',
          }}>
          Welcome
        </Text>
        <Text style={{fontFamily: 'Roboto-Medium'}}>
          Don't Have An Account?
          <Text
            style={{color: '#4169e1', fontStyle: 'italic'}}
            onPress={() => {
              navigation.navigate('RegistrationSelectionScreen');
            }}>
            Click To Register Now
          </Text>
        </Text>
        {/* ============Text Input View ===========*/}
        <View style={{marginVertical: 10}}>
          <View style={{marginBottom: 15}}>
            <TextInput
              label="Enter Phone Number"
              mode="type:outlined "
              style={{height: 47}}
              onChangeText={value => {
                onChangeUserHandle(value);
              }}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <>
              {data.userValidation ? null : (
                <Text
                  style={{
                    fontSize: 12,
                    color: 'red',
                    fontFamily: 'Roboto-Regular',
                  }}>
                  Please Enter Phone Number
                </Text>
              )}
            </>
          </View>

          <View style={{marginBottom: 15}}>
            <TextInput
              label="Enter Password"
              autoComplete="off"
              secureTextEntry={passwordVisible}
              mode="type:outlined "
              style={{height: 47}}
              onChangeText={value => {
                onChangePasswordHandle(value);
              }}
              autoCapitalize="none"
              right={
                <TextInput.Icon
                  name={passwordVisible ? 'eye' : 'eye-off'}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
            />

            <>
              {data.passwordValidation ? null : (
                <Text
                  style={{
                    fontSize: 12,
                    color: 'red',
                    fontFamily: 'Roboto-Regular',
                  }}>
                  Please Enter Password
                </Text>
              )}
            </>
          </View>

          <Button
            icon="login"
            mode="contained"
            onPress={()=>navigation.navigate('userTab')}
            //onPress={() => loginHandle(data.username, data.password)}
            style={{fontWeight: 'bold'}}>
            <Text style={{fontFamily: 'Roboto-Black'}}>Login</Text>
          </Button>
        </View>
        {/* ============Forget password And Remember Me View ===========*/}
        <View style={styles.gorgetPassword}>
          <View style={{flex: 1, marginLeft: -7, flexDirection: 'row'}}>
            <Checkbox
              status={remenberMe ? 'checked' : 'unchecked'}
              onPress={() => {
                SetRememberMe(!remenberMe);
              }}
            />
            <Text
              style={{
                marginTop: 9,
                fontSize: 14,
                color: '#000',
                fontFamily: 'Roboto-Medium',
              }}>
              Remember Me
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: -7,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                marginTop: 9,
                fontSize: 14,
                color: '#000',
                fontFamily: 'Roboto-Medium',
              }}
              onPress={() => {
                navigation.navigate('ForGetPasswordScreen');
              }}>
              Forget Password
            </Text>
          </View>
        </View>
        {/* ============Login With Social  View ===========*/}
        <View style={{flex: 1}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'RobotoSlab_600SemiBold',
            }}>
            Or Login With
          </Text>
          <View style={styles.SocialLiginView}>
            <Button
              mode="contained"
              onPress={() => console.log('Pressed')}
              style={[
                {backgroundColor: '#097EEB', borderRadius: 50},
                styles.shadowProp,
              ]}>
              <AntDesign
                name="facebook-square"
                size={18}
                color="#fff"
                style={{color: '#fff', fontSize: 30}}
              />
            </Button>
            <Button
              mode="contained"
              onPress={() => console.log('Pressed')}
              style={{backgroundColor: '#00ACEE', borderRadius: 50}}>
              <AntDesign
                name="twitter"
                size={18}
                color="#fff"
                style={{color: '#fff', fontSize: 30}}
              />
            </Button>

            <Button
              mode="contained"
              onPress={() => console.log('Pressed')}
              style={{backgroundColor: '#DA4437', borderRadius: 50}}>
              <AntDesign
                name="google"
                size={18}
                color="#fff"
                style={{color: '#fff', fontSize: 30}}
              />
            </Button>
          </View>
        </View>
      </View>
    </Animatable.View>
  </ScrollView>
  )
}

export default LoginScreen
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
    fontSize: 30,
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
});