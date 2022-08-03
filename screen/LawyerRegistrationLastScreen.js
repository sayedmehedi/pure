import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button, TextInput} from 'react-native-paper';
import {PaperSelect} from 'react-native-paper-select';


export default function LawyerRegistrationLastScreen(props) {
  const [height, setHeight] = useState('');
  const [lawyer_category, setLawyerCategory] = useState({
    value: '',
    list: [
      {
        _id: '1',
        value: 'Criminal',
      },
      {
        _id: '2',
        value: 'Corporate',
      },
      {
        _id: '3',
        value: 'Trade Mark',
      },
      {
        _id: '4',
        value: 'Cyber Crime',
      },
    ],
    selectedList: [],
    error: '',
  });

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#EEF2FB',
      }}
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
            style={{
              color: '#fff',
              fontSize: 30,
            }}
          />
        </Text>
      </View>

      <View style={styles.bottomView}>
        <View
          style={{
            padding: 24,
            flex: 1.5,
          }}>
          <TextInput
            outlineColor="#2B3875"
            label="Enter Bar Name"
            mode="outlined"
            placeholder="Enter Bar Name"
            style={styles.textInput}
          />

          <TextInput
            outlineColor="#2B3875"
            label="Enter Enrolement Number"
            mode="outlined"
            placeholder="Enter Enrolement Number"
            style={styles.textInput}
          />

          <TextInput
            outlineColor="#2B3875"
            label="Enter Years Of Practice"
            mode="outlined"
            placeholder="Enter Years Of Practice"
            style={styles.textInput}
          />

          <TextInput
            outlineColor="#2B3875"
            label="Enter Renowned Case Name"
            mode="outlined"
            placeholder="Enter Renowned Case Name"
            style={styles.textInput}
          />

          <TextInput
            outlineColor="#2B3875"
            label="Enter Current Chember Name"
            mode="outlined"
            placeholder="Enter Current Chember Name"
            style={styles.textInput}
          />

          <TextInput
            outlineColor="#2B3875"
            label="Enter Previous Chember Name"
            mode="outlined"
            placeholder="Enter Previous Chember Name"
            style={styles.textInput}
          />

          <PaperSelect
            label="Select Practice Area"
            value={lawyer_category.value}
            onSelection={value => {
              setLawyerCategory({
                ...lawyer_category,
                value: value.text,
                selectedList: value.selectedList,
                error: '',
              });
            }}
            arrayList={[...lawyer_category.list]}
            selectedArrayList={lawyer_category.selectedList}
            errorText={lawyer_category.error}
            multiEnable={false}
            dialogTitleStyle={{
              color: '#000',
            }}
            checkboxColor="#000"
            checkboxLabelStyle={{
              color: '#000',
              fontWeight: '700',
            }}
            textInputBackgroundColor="#fff"
            textInputColor="red"
            outlineColor="#2B3875"
            mode="outlined"
            style={{
              height: 38,
            }}
          />

          <TextInput
            multiline
            outlineColor="#2B3875"
            mode="outlined"
            numberOfLines={4}
            placeholder="Details About You"
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
            style={{
              backgroundColor: '#4169e1',
            }}
            onPress={() => {
              props.navigation.navigate('MainDrawerNavigation');
            }}>
            <Text
              style={{
                fontFamily: 'Roboto-Black',
              }}>
              Register
            </Text>
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
