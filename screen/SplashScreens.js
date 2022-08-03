import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AntDesign} from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const SplashScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.title}>Welcome To Somadhan!</Text>
          <Text style={[styles.text, {fontSize: 15}]}>
            Stay Connected With Us
          </Text>
          <TouchableOpacity
            style={{marginTop: 30, alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>
              Get Started
            </Text>
            <AntDesign
              name="arrowright"
              size={20}
              color="#fff"
              style={{marginLeft: 5}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169e1',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'RobotoSlab_600SemiBold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
    fontFamily: 'RobotoSlab_900Black',
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
