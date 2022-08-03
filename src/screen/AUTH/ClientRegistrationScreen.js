import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {
  Button,
  TextInput,
  Surface,
} from 'react-native-paper';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';


/*======================District Array List=====================*/

const district = [
  // this is the parent or 'item'
  {
    value: 'Select District From Here',
    id: 0,
    // these are the children or 'sub items'
    list: [
      {_id: '1', value: 'Dhaka'},
      {_id: '2', value: 'Faridpur'},
      {_id: '3', value: 'Gazipur'},
      {_id: '4', value: 'Gopalganj'},
      {_id: '5', value: 'Jamalpur'},
      {_id: '6', value: 'Kishoreganj'},
      {_id: '7', value: 'Madaripur'},
      {_id: '8', value: 'Manikganj'},
      {_id: '9', value: 'Munshiganj'},
      {_id: '10', value: 'Mymensingh'},
      {_id: '11', value: 'Narayanganj'},
      {_id: '12', value: 'Narsingdi'},
      {_id: '13', value: 'Netrokona'},
      {_id: '14', value: 'Rajbari'},
      {_id: '15', value: 'Shariatpur'},
      {_id: '16', value: 'Sherpur'},
      {_id: '17', value: 'Tangail'},
      {_id: '18', value: 'Bogura'},
      {_id: '20', value: 'Naogaon'},
      {_id: '21', value: 'Natore'},
      {_id: '22', value: 'Nawabganj'},
      {_id: '23', value: 'Pabna'},
      {_id: '24', value: 'Rajshahi'},
      {_id: '25', value: 'Sirajgonj'},
      {_id: '26', value: 'Dinajpur'},
      {_id: '27', value: 'Gaibandha'},
      {_id: '28', value: 'Kurigram'},
      {_id: '29', value: 'Lalmonirhat'},
      {_id: '30', value: 'Nilphamari'},
      {_id: '31', value: 'Panchagarh'},
      {_id: '32', value: 'Rangpur'},
      {_id: '33', value: 'Thakurgaon'},
      {_id: '34', value: 'Barguna'},
      {_id: '35', value: 'Barishal'},
      {_id: '36', value: 'Bhola'},
      {_id: '37', value: 'Jhalokati'},
      {_id: '38', value: 'Patuakhali'},
      {_id: '39', value: 'Pirojpur'},
      {_id: '40', value: 'Bandarban'},
      {_id: '41', value: 'Brahmanbaria'},
      {_id: '42', value: 'Chandpur'},
      {_id: '43', value: 'Chattogram'},
      {_id: '44', value: 'Cumilla'},
      {_id: '45', value: "Cox's Bazar"},
      {_id: '46', value: 'Feni'},
      {_id: '47', value: 'Khagrachari'},
      {_id: '48', value: 'Lakshmipur'},
      {_id: '49', value: 'Noakhali'},
      {_id: '50', value: 'Rangamati'},
      {_id: '51', value: 'Habiganj'},
      {_id: '52', value: 'Maulvibazar'},
      {_id: '53', value: 'Sunamganj'},
      {_id: '54', value: 'Sylhet'},
      {_id: '55', value: 'Bagerhat'},
      {_id: '56', value: 'Chuadanga'},
      {_id: '57', value: 'Jashore'},
      {_id: '58', value: 'Jhenaidah'},
      {_id: '59', value: 'Khulna'},
      {_id: '60', value: 'Kushtia'},
      {_id: '61', value: 'Magura'},
      {_id: '62', value: 'Meherpur'},
      {_id: '63', value: 'Narail'},
      {_id: '64', value: 'Satkhira'},
    ],
  },
];

export default class ClientRegistrationScreen extends Component {
  constructor() {
    super();
    this.state = {
      height: '',
      isSecureEntry: true,
      isSecureConfirmEntry: true,
      client_name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      PasswordValidation: true,
      ConfirmPasswordValidation: true,
      nid: '',
      address: '',
      NameValidation: true,
      PhoneValidation: true,
      phone: '',
      selectedDistrict: [],
      selectedDistrictValue: [],
      DistrictValidation: true,
      conpassvaliMess: '',
      passwordMsg: '',
    };
  }

  /**=======Select Practice Area============ */
  onSelectedDistrictChange = selectedDistrict => {
    this.setState({selectedDistrict});
    console.log(selectedDistrict);
  };

  /**=======Select District Value============ */
  onSelectedValuDistrict = selectedDistrictValue => {
    this.setState({
      selectedDistrictValue,
      DistrictValidation: true,
    });
    console.log(selectedDistrictValue);
  };

  onChangeNameHandle = value => {
    this.setState({
      client_name: value,
      NameValidation: true,
    });
  };

  /**=======OnChange Phone Handle============ */
  onChangePhoneHandle = value => {
    this.setState({
      phone: value,
      PhoneValidation: true,
    });
  };

  /**=======OnChange Email Handle============ */
  onChangeEmailHandle = value => {
    this.setState({
      email: value,
    });
  };

  /**=======OnChange Password Handle============ */
  onChangePasswordHandle = value => {
    this.setState({
      password: value,
      PasswordValidation: true,
      // passwordMsg:''
    });
  };

  onChangeConPasswordHandle = value => {
    this.setState({
      confirmPassword: value,
      ConfirmPasswordValidation: true,
      // conpassvaliMess:''
    });
  };

  onChangeNidHandle = value => {
    this.setState({
      nid: value,
    });
  };

  /*================SubMit Data To the Server======================*/

  subMitData = async () => {
    // console.log("ok");

    if (
      this.state.client_name !== '' &&
      this.state.phone !== '' &&
      this.state.password !== '' &&
      this.state.selectedDistrict.length !== 0 &&
      this.state.password === this.state.confirmPassword
    ) {
      const formData = new FormData();
      formData.append('name', this.state.client_name);
      formData.append('phone', this.state.phone);
      formData.append('nid', this.state.nid);
      formData.append('email', this.state.email);
      formData.append('password', this.state.password);
      formData.append('district', this.state.selectedDistrictValue[0].value);

      const res = await fetch(
        'https://mahatabmemorialclinic.com/api/auth/register',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            //   'Content-Type': 'application/json'
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        },
      ).catch(error => {
        console.error(error);
      });

      const json = await res.json();

      if (json.status == 'success') {
        this.context.signUp(json.token, json.data.isClient, json.data.name);
      } else {
        Alert.alert('Something Went Wrong');
      }

      console.log(json);

      //this.context.signUp('ami','ami');
      // console.log(this.context);
    } else {
      if (this.state.client_name === '') {
        this.setState({NameValidation: false});
      }

      if (this.state.phone === '') {
        this.setState({PhoneValidation: false});
      }

      if (this.state.password === '') {
        this.setState({
          PasswordValidation: false,
          passwordMsg: 'Please Enter password',
        });
      }
      if (this.state.password !== '') {
        console.log(this.state.password.length);

        if (this.state.password.length < 5) {
          this.setState({
            PasswordValidation: false,
            passwordMsg: 'Password Must Me at least 6 characters',
          });
        }
      }
      if (this.state.confirmPassword === '') {
        this.setState({
          ConfirmPasswordValidation: false,
          conpassvaliMess: 'Please Enter Confirm Password',
        });
      }

      if (this.state.confirmPassword !== '') {
        if (this.state.password !== this.state.confirmPassword) {
          this.setState({
            ConfirmPasswordValidation: false,
            conpassvaliMess: 'Password Not Matched',
          });
        }
      }

      if (this.state.selectedDistrict.length == 0) {
        this.setState({DistrictValidation: false});
      }
    }
  };

  render() {
 
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: '#EEF2FB'}}
        showsVerticalScrollIndicator={false}>
        <Surface style={styles.brandView}>
          <Text style={styles.brandViewText}>Client registration</Text>
          <Text
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <AntDesign
              name="arrowleft"
              size={18}
              color="#fff"
              style={{color: '#fff', fontSize: 30}}
            />
          </Text>
        </Surface>

        <View style={{padding: 24, flex: 1.5}}>
          <View style={{marginBottom: 10}}>
            <TextInput
              outlineColor="#2B3875"
              label="Enter Name*"
              mode="outlined"
              placeholder="Name"
              style={styles.textInput}
              onChangeText={value => {
                this.onChangeNameHandle(value);
              }}
            />
            <>
              {this.state.NameValidation ? null : (
                <Text
                  style={{
                    fontSize: 12,
                    color: 'red',
                    fontFamily: 'Roboto-Regular',
                  }}>
                  Please Enter Name
                </Text>
              )}
            </>
          </View>

          <View style={{marginBottom: 10}}>
            <TextInput
              outlineColor="#2B3875"
              label="Enter Phone*"
              mode="outlined"
              placeholder="Phone"
              style={styles.textInput}
              onChangeText={value => {
                this.onChangePhoneHandle(value);
              }}
            />
            <>
              {this.state.PhoneValidation ? null : (
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

          <View style={{marginBottom: 10}}>
            <SectionedMultiSelect
              items={district}
              IconRenderer={Icon}
              uniqueKey="_id"
              displayKey="value"
              subKey="list"
              selectText="Select District"
              showDropDowns={true}
              readOnlyHeadings={true}
              onSelectedItemsChange={this.onSelectedDistrictChange}
              onSelectedItemObjectsChange={this.onSelectedValuDistrict}
              selectedItems={this.state.selectedDistrict}
              styles={{
                selectToggle: {
                  backgroundColor: '#fff',
                  padding: 8,
                  borderWidth: 1,
                  borderColor: '#2B3875',
                  borderRadius: 5,
                },
                selectToggleText: {color: '#7d7e7c'},
              }}
              expandDropDowns={true}
              searchPlaceholderText="Search District Here"
              single={true}
            />
            <>
              {this.state.DistrictValidation ? null : (
                <Text
                  style={{
                    fontSize: 12,
                    color: 'red',
                    fontFamily: 'Roboto-Regular',
                  }}>
                  Please Select Your District You Live In
                </Text>
              )}
            </>
          </View>

          <View style={{marginBottom: 10}}>
            <TextInput
              outlineColor="#2B3875"
              label="Enter Email"
              mode="outlined"
              placeholder="Email"
              style={styles.textInput}
              onChangeText={value => {
                this.onChangeEmailHandle(value);
              }}
            />
          </View>

          <View style={{marginBottom: 10}}>
            <TextInput
              right={
                <TextInput.Icon
                  name="eye"
                  forceTextInputFocus={false}
                  onPress={() => {
                    this.setState({isSecureEntry: !this.state.isSecureEntry});
                  }}
                />
              }
              autoComplete="off"
              secureTextEntry={this.state.isSecureEntry}
              outlineColor="#2B3875"
              label="Enter Password*"
              mode="outlined"
              placeholder="Password"
              style={styles.textInput}
              onChangeText={value => {
                this.onChangePasswordHandle(value);
              }}
            />
            <>
              {this.state.PasswordValidation ? null : (
                <Text
                  style={{
                    fontSize: 12,
                    color: 'red',
                    fontFamily: 'Roboto-Regular',
                  }}>
                  {this.state.passwordMsg}
                </Text>
              )}
            </>
          </View>

          <View style={{marginBottom: 10}}>
            <TextInput
              right={
                <TextInput.Icon
                  name="eye"
                  forceTextInputFocus={false}
                  onPress={prev => {
                    this.setState({
                      isSecureConfirmEntry: !this.state.isSecureConfirmEntry,
                    });
                  }}
                />
              }
              autoComplete="off"
              secureTextEntry={this.state.isSecureConfirmEntry}
              outlineColor="#2B3875"
              label="Confirm Password*"
              mode="outlined"
              placeholder="Confirm Password"
              style={styles.textInput}
              onChangeText={value => {
                this.onChangeConPasswordHandle(value);
              }}
            />
            <>
              {this.state.ConfirmPasswordValidation ? null : (
                <Text
                  style={{
                    fontSize: 12,
                    color: 'red',
                    fontFamily: 'Roboto-Regular',
                  }}>
                  {this.state.conpassvaliMess}
                </Text>
              )}
            </>
          </View>

          <View style={{marginBottom: 10}}>
            <TextInput
              outlineColor="#2B3875"
              label="Enter NID"
              mode="outlined"
              placeholder="Enter NID Number"
              style={styles.textInput}
              onChangeText={value => {
                this.onChangeNidHandle(value);
              }}
            />
          </View>

          <View style={{marginBottom: 10}}>
            <TextInput
              multiline
              outlineColor="#2B3875"
              mode="outlined"
              numberOfLines={4}
              placeholder="Enter Address"
              onContentSizeChange={event => {
                this.setState({height: event.nativeEvent.contentSize.height});
              }}
              style={{
                height: 80,
                marginBottom: 11,
                backgroundColor: '#fff',
                fontFamily: 'Roboto-Medium',
              }}
            />
          </View>

          <Button
            icon="login"
            mode="contained"
            onPress={this.subMitData}
            style={{backgroundColor: '#4169e1'}}>
            <Text style={{fontFamily: 'Roboto-Bold'}}>Register</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

//ClientRegistrationScreen.contextType = AuthContest;

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4169e1',
    padding: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 4,
  },
  brandViewText: {
    color: '#fff',
    fontSize: 25,
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Bold',
  },

  bottomView: {
    flex: 1,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: '#EEF2FB',
  },
  textInput: {
    height: 38,
    backgroundColor: '#fff',
    fontFamily: 'Roboto-Medium',
  },
});
