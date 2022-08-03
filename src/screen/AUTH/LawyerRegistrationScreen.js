import {
  StyleSheet,
  Text,
  View,
  ScrollView,

 
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button, TextInput} from 'react-native-paper';


export default function LawyerRegistrationScreen(props) {
  const [height, setHeight] = useState('');
  const [isSecureEntry, SetIsSecureEntry] = useState(true);
  const [isSecureConfirmEntry, SetIsSecureConfirmEntry] = useState(true);

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#EEF2FB'}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.brandView}>
        <Text style={styles.brandViewText}>lawyer registration</Text>
        <Text
          onPress={() => {
            props.navigation.goBack();
          }}>
          <AntDesign
            name="arrowleft"
            size={18}
            color="#fff"
            style={{color: '#fff', fontSize: 30}}
          />
        </Text>
      </View>

      <View style={styles.bottomView}>
        <View style={{padding: 24, flex: 1.5}}>
          <TextInput
            outlineColor="#2B3875"
            label="Enter Registration Number*"
            mode="outlined"
            placeholder="Registration Number"
            style={styles.textInput}
          />
          <TextInput
            outlineColor="#2B3875"
            label="Enter Name*"
            mode="outlined"
            placeholder="Name"
            style={styles.textInput}
          />

          <TextInput
            outlineColor="#2B3875"
            label="Enter Phone*"
            mode="outlined"
            placeholder="Phone"
            style={styles.textInput}
          />

          <TextInput
            outlineColor="#2B3875"
            label="Enter Email"
            mode="outlined"
            placeholder="Email"
            style={styles.textInput}
          />

          <TextInput
            right={
              <TextInput.Icon
                name="eye"
                forceTextInputFocus={false}
                onPress={prev => {
                  SetIsSecureEntry(prev => !prev);
                }}
              />
            }
            autoComplete="off"
            secureTextEntry={isSecureEntry}
            outlineColor="#2B3875"
            label="Enter Password*"
            mode="outlined"
            placeholder="Password"
            style={styles.textInput}
          />

          <TextInput
            right={
              <TextInput.Icon
                name="eye"
                forceTextInputFocus={false}
                onPress={prev => {
                  SetIsSecureConfirmEntry(prev => !prev);
                }}
              />
            }
            autoComplete="off"
            secureTextEntry={isSecureConfirmEntry}
            outlineColor="#2B3875"
            label="Confirm Password*"
            mode="outlined"
            placeholder="Confirm Password"
            style={styles.textInput}
          />

          <TextInput
            outlineColor="#2B3875"
            label="Enter District"
            mode="outlined"
            placeholder="District Name"
            style={styles.textInput}
          />

          <TextInput
            outlineColor="#2B3875"
            label="Enter NID"
            mode="outlined"
            placeholder="Enter NID Number"
            style={styles.textInput}
          />

          <TextInput
            multiline
            outlineColor="#2B3875"
            mode="outlined"
            numberOfLines={4}
            placeholder="Exter Address"
            onContentSizeChange={event => {
              setHeight(event.nativeEvent.contentSize.height);
            }}
            style={{
              height: 80,
              marginBottom: 11,
              backgroundColor: '#fff',
              fontFamily: 'Roboto-Medium',
            }}
          />

          <Button
            icon="login"
            mode="contained"
            style={{backgroundColor: '#4169e1'}}
            onPress={() => {
              props.navigation.navigate('LawyerRegistrationLastScreen');
            }}>
            <Text style={{fontFamily: 'Roboto-Black'}}>Next</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4169e1',
    padding: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  brandViewText: {
    color: '#fff',
    fontSize: 25,
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Black',
  },

  bottomView: {
    flex: 1,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: '#EEF2FB',
  },
  textInput: {
    height: 38,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontFamily: 'Roboto-Medium',
  },
});
