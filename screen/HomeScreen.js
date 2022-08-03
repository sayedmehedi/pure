import React,{useEffect,useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import CustomHeader from '../components/header';

function HomeScreen({navigation, route}) {
  const [news, setNews] = useState([]);
  const [lawyer, setLawyer] = useState([]);

  /**==============Get News================ */
  const getNews = async () => {
    // setIsLoading(true);

    const BASE_URI = `https://mahatabmemorialclinic.com/api/news/lists`;

    try {
      const response = await fetch(BASE_URI, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      setNews(json.data);
      // setIsLoading(false);

      // console.log(json.data);
    } catch (e) {
      console.log(e);
    }
  };

  /**==============Get Lawyer================ */
  const getLawyer = async () => {
    const BASE_URI = `https://mahatabmemorialclinic.com/api/lawyers?paginate=1&page=1&per_page=20`;

    try {
      const response = await fetch(BASE_URI, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      setLawyer(json.data.data);
      // console.log(json.data.data);
      //setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const renderItem = ({item}) => {
    return (
      <Card
        id={item.id}
        title={item.name}
        raiting={4}
        category="Criminal"
        address="Mohammadpur , Dhaka"
        image={{uri: item.image_url}}
        navigation={navigation}
      />
    );
  };

  useEffect(() => {
    getNews();
    getLawyer();
  }, []);

  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Home" isHome="true" navigation={navigation} />

      <ScrollView
        style={{flex: 1, backgroundColor: '#EEF2FB'}}
        showsVerticalScrollIndicator={false}>
        <Text style={{margin: 10, fontFamily: 'Roboto-Black', fontSize: 16}}>
          News
        </Text>

        <Carousel data={news} />

        <Text style={{margin: 10, fontFamily: 'Roboto-Black', fontSize: 16}}>
          Top Rated Lawyer
        </Text>

        {lawyer.map(item => {
          //console.log(item.lcategories);

          var array_nodes = [];
          item.lcategories.forEach(function (d) {
            array_nodes.push(d.category_name);
          });

          //console.log(array_nodes.toString());

          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.name}
              raiting={3}
              category={array_nodes.toString()}
              address={item.district}
              image={{uri: item.image_url}}
              navigation={navigation}></Card>
          );
        })}
      </ScrollView>

      {/* <View style={{flex:0.7,backgroundColor:'#EEF2FB'}}>

            <FlatList
                  data={lawyer}
                  renderItem={renderItem}
                  keyExtractor={item=>item.id}
              />

          </View> */}
    </View>
  );
}



export default HomeScreen;
