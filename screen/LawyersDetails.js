import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomHeader from '../components/header';
import {
  Avatar,
  Divider,
  Button,
  Surface,
  RadioButton,
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';

const LawyersDetails = props => {
  console.log(props.route.params.id);
  
  const [checked, setChecked] = useState('first');
  const [details, setDetails] = useState({});
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getLawyerDetails = async () => {
    setIsLoading(true);
    const BASE_URI = `https://mahatabmemorialclinic.com/api/lawyer/${props.route.params.id}`;

    try {
      const response = await fetch(BASE_URI, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();
      //console.log(json.data);

      setDetails(json.data);

      /*Find lawyer practice area*/
      var array_nodes = [];
      json.data.lcategories.forEach(function (d) {
        array_nodes.push(d.category_name);
      });

      setCategory(array_nodes.toString());

      setIsLoading(false);

      //console.log(array_nodes.toString());
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLawyerDetails();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#EEF2FB'}}>
      <CustomHeader title="Lawyer Profile" navigation={props.navigation} />

      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView
          style={{flex: 1, margin: 15}}
          showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.lawyerImage}>
              <Avatar.Image size={125} source={{uri: details.image_url}} />
            </View>
            <View style={styles.lawyerDetails}>
              <Text style={styles.title}>{details.name}</Text>
              <Text style={styles.category}>{category}</Text>
              <Text style={styles.address}>
                <Ionicons name="location-outline" size={15} />
                <Text style={{marginLeft: 15, textAlign: 'justify'}}>
                  {details.district}
                </Text>
              </Text>
              <Text>
                <Rating
                  showRating={false}
                  isDisabled={true}
                  count={5}
                  imageSize={15}
                  rating={4}
                />
                (4)
              </Text>
            </View>
          </View>
          <View style={styles.details}>
            <Text
              style={{
                textAlign: 'justify',
                color: '#777',
                fontFamily: 'Roboto-Regular',
              }}>
              {details.details != null ? details.details : ''}
            </Text>
          </View>

          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              fontSize: 14,
              color: '#777',
              marginTop: 15,
            }}>
            Packages For Talk With Him
          </Text>
          <Divider style={{marginVertical: 10}} />

          <View style={{flex: 1}}>
            <Surface style={styles.surface}>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text style={styles.packageText}> 20 min &#x09F3;100</Text>
            </Surface>
            <Surface style={styles.surface}>
              <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
              <Text style={styles.packageText}> 30 min &#x09F3;200</Text>
            </Surface>
            <Surface style={styles.surface}>
              <RadioButton
                value="third"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
              />
              <Text style={styles.packageText}> 45 min &#x09F3;300</Text>
            </Surface>

            <Button
              style={{backgroundColor: '#2B3875', fontFamily: 'Roboto-Regular'}}
              mode="contained">
              <Icon name="volume-control-phone" size={20} color="#fff" />
              <Text> Talk To Him</Text>
            </Button>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default LawyersDetails;

const styles = StyleSheet.create({
  lawyerImage: {
    flex: 0.3,
    marginRight: 15,
  },
  lawyerDetails: {
    flex: 0.7,
    marginLeft: 25,
    textAlign: 'justify',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    marginBottom: 5,
    color: '#2B3875',
  },
  category: {
    marginBottom: 5,
    color: '#777',
    textAlign: 'justify',
    fontFamily: 'Roboto-Medium',
  },
  address: {
    marginBottom: 5,
    color: '#777',
    fontFamily: 'Roboto-Medium',
  },
  details: {
    marginTop: 30,
  },
  surface: {
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 4,
    fontFamily: 'Roboto-Medium',
    marginBottom: 15,
  },
  packageText: {
    color: '#75C71F',
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
  },
});
