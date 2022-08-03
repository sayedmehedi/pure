import React, {useState} from 'react';
import {

  View,
  StyleSheet,

  ScrollView,
 
} from 'react-native';
import Card from '../components/Card';
import CustomHeader from '../components/header';
import {Searchbar} from 'react-native-paper';

function SearchScreen(props) {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={{flex: 1}}>
      <CustomHeader
        title="Search"
        isHome="true"
        navigation={props.navigation}
      />
      <View style={{margin: 10}}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <Card
            title="Barister Md.Noyon Miya"
            raiting={4}
            category="Criminal"
            address="Mohammadpur , Dhaka"
            image={require('../assets/images/16.jpg')}
            navigation={props.navigation}></Card>

          <Card
            title="Barister Md.Rakib Hasan"
            raiting={3}
            category="Criminal"
            address="Mohammadpur , Dhaka"
            image={require('../assets/images/17.jpg')}
            navigation={props.navigation}></Card>

          <Card
            title="Barister Md. Kohondokar Alom"
            raiting={3}
            category="Criminal"
            address="Mohammadpur , Dhaka"
            image={require('../assets/images/18.jpg')}
            navigation={props.navigation}></Card>

          <Card
            title="Barister Md.Aman Arif"
            raiting={3}
            category="Criminal"
            address="Mohammadpur , Dhaka"
            image={require('../assets/images/19.jpg')}
            navigation={props.navigation}></Card>

          <Card
            title="Barister Md.Kazi Razib"
            raiting={3}
            category="Criminal"
            address="Mohammadpur , Dhaka"
            image={require('../assets/images/2.jpg')}
            navigation={props.navigation}></Card>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CardView: {},
});

export default SearchScreen;
