import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomHeader from '../components/header';
import {
  Button,
  TextInput,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

let bs = React.createRef(null);
let fall = new Animated.Value(1);

function EditProfileScreen(props) {
  const [image, setImage] = useState(
    'https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU',
  );
  const [height, setHeight] = useState('');

  function renderInner() {
    return (
      <View style={styles.panel}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.panelTitle}>Upload Photo</Text>
          <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
        </View>
        <TouchableOpacity style={styles.panelButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panelButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Choose From Library</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={() => bs.current.snapTo(1)}>
          <Text style={styles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Edit Profile" navigation={props.navigation} />
      <ScrollView
        style={{flex: 1, backgroundColor: '#EEF2FB'}}
        showsVerticalScrollIndicator={false}>
        <BottomSheet
          ref={bs}
          snapPoints={[300, 0]}
          renderContent={renderInner}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={false}
        />
        <View style={styles.container}>
          <Animated.View
            style={{
              margin: 20,
              opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
            }}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  bs.current.snapTo(0);
                }}>
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ImageBackground
                    source={{uri: image}}
                    style={{height: 100, width: 100}}
                    imageStyle={{borderRadius: 15}}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name="camera"
                        size={35}
                        color="#fff"
                        style={{
                          opacity: 0.7,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 1,
                          borderColor: '#fff',
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
              <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                John Doe
              </Text>
            </View>
          </Animated.View>

          <View style={styles.bottomView}>
            <View style={{padding: 24, flex: 1.5}}>
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
                outlineColor="#2B3875"
                label="Enter District"
                mode="outlined"
                placeholder="District Name"
                style={styles.textInput}
              />
              <TextInput
                multiline
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
                  fontFamily: 'RobotoSlab_300Light',
                }}
              />

              <Button
                icon="pencil-plus"
                mode="contained"
                onPress={() =>
                  props.navigation.navigate('MainDrawerNavigation')
                }
                style={{backgroundColor: '#2B3875'}}>
                <Text style={{fontFamily: 'RobotoSlab_800ExtraBold'}}>
                  Edit
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2FB',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    // backgroundColor: '#fffaf0',
    backgroundColor: '#fffaf0',
  },
  header: {
    backgroundColor: '#fffaf0',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 9,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 23,
    height: 35,
    fontFamily: 'RobotoSlab_500Medium',
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
    fontFamily: 'RobotoSlab_400Regular',
  },
  panelButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#483d8b',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'RobotoSlab_400Regular',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },

  textInput: {
    height: 38,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontFamily: 'RobotoSlab_300Light',
  },
});

export default EditProfileScreen;
