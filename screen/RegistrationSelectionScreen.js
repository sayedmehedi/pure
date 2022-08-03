import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Button} from 'react-native-paper';


function RegistrationSelectionScreen(props) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.TopContainer}>
        <SimpleLineIcons
          name="user"
          size={20}
          color="#fff"
          style={{color: '#fff', fontSize: 80}}
        />
        <Text style={styles.brandViewText}>Select Your Role</Text>
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

      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 40,
        }}>
        <Button
          style={{marginBottom: 20, alignSelf: 'stretch'}}
          mode="contained"
          onPress={() => {
            props.navigation.navigate('ClientRegistrationScreen');
          }}>
          <Text style={{fontFamily: 'Roboto-Black'}}>I AM A CLIENT</Text>
        </Button>
        <Button
          style={{alignSelf: 'stretch'}}
          mode="contained"
          onPress={() => {
            props.navigation.navigate('LawyerRegistrationScreen');
          }}>
          <Text style={{fontFamily: 'Roboto-Black'}}>I AM A LAWYER</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: 'red',
  },
  headerTitle: {
    color: '#fff',
    fontFamily: 'Roboto-Black',
    fontSize: 25,
    fontWeight: 'Bold',
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
    marginTop: 10,
  },
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
});

export default RegistrationSelectionScreen;
