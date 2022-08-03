import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomHeader from '../components/header';
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
  Surface,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ProfileScreen(props) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <CustomHeader
        title="Profile"
        isHome="true"
        navigation={props.navigation}
      />

      <Surface style={styles.surfaceTop}>
        <View style={styles.userInfoSection}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <Avatar.Image
              source={require('../assets/images/1.jpg')}
              size={100}
            />
            <View
              style={{
                marginLeft: 20,
              }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}>
                John Doe
              </Title>
              <Caption style={styles.caption}>@j_doe</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#777777" size={20} />
            <Text
              style={{
                color: '#777777',
                marginLeft: 20,
              }}>
              Dhaka , Bangladesh
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#777777" size={20} />
            <Text
              style={{
                color: '#777777',
                marginLeft: 20,
              }}>
              +8801783198879
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#777777" size={20} />
            <Text
              style={{
                color: '#777777',
                marginLeft: 20,
              }}>
              john_doe@email.com
            </Text>
          </View>
        </View>
      </Surface>

      <View style={{flexDirection: 'row', marginHorizontal: 12}}>
        <Surface
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
              padding: 8,
              elevation: 2,
            },
          ]}>
          <Title>&#x09F3;140.50</Title>
          <Caption style={styles.caption}>Total Spent</Caption>
        </Surface>
        <Surface style={[styles.infoBox, {elevation: 2}]}>
          <Title>12</Title>
          <Caption style={styles.caption}>Orders</Caption>
        </Surface>
      </View>

      <View style={styles.menuWrapper}>
        <Surface style={{marginHorizontal: 12, elevation: 2, marginTop: 4}}>
          <TouchableRipple
            onPress={() => {
              props.navigation.navigate('EditProfileScreen');
            }}>
            <View style={styles.menuItem}>
              <Icon name="square-edit-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Edit Profile</Text>
            </View>
          </TouchableRipple>
        </Surface>

        <Surface style={{marginHorizontal: 12, elevation: 2, marginTop: 15}}>
          <TouchableRipple
            onPress={() => {
              props.navigation.navigate('NewPasswordUserScreen');
            }}>
            <View style={styles.menuItem}>
              <Icon name="key-change" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Change Password</Text>
            </View>
          </TouchableRipple>
        </Surface>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginTop: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 15,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  surfaceTop: {
    marginTop: 12,
    marginHorizontal: 12,
    elevation: 2,
    fontFamily: 'Roboto-Medium',
    marginBottom: 15,
  },
});

export default ProfileScreen;
