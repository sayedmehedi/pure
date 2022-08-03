import React, {useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import CustomHeader from '../../components/header';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
const NewsListScreen = props => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const getNews = async () => {
    setIsLoading(true);

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
      setIsLoading(false);

      //console.log(json.data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteList = id => {
    Alert.alert('Confirmation', 'Are You Sure You Want To delet', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          const BASE_URI = `https://mahatabmemorialclinic.com/api/news/delete/${id}`;

          try {
            const response = await fetch(BASE_URI, {
              method: 'DELETE',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            });

            const json = await response.json();

            props.navigation.push('NewsList');
          } catch (e) {
            console.log(e);
          }

          console.log(id);
        },
      },
    ]);
  };

  const renderItem = ({item, index}) => {
    let a = item.image_url;
    if (item.image !== '') {
      a = item.image_url;
    } else {
      a =
        'https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU';
    }

    return (
      <Card style={{marginBottom: 15, marginHorizontal: 15, marginTop: 10}}>
        <Card.Cover
          source={{
            uri: a,
          }}
        />
        <Card.Content>
          <Title>{item.title}</Title>
          <Paragraph>{item.details}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            onPress={() => props.navigation.push('EditNews', {item: item})}>
            <AntDesign name="edit" size={23} />
          </Button>
          <Button
            onPress={() => {
              deleteList(item.id);
            }}>
            <AntDesign name="delete" size={23} />
          </Button>
        </Card.Actions>
      </Card>
    );
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flex: 1,
        backgroundColor: '#EEF2FB',
      }}>
      <StatusBar backgroundColor="#3B3875" />
      <CustomHeader
        title="News List"
        isHome="true"
        navigation={props.navigation}
      />

      {isLoading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={{marginBottom: 45}}>
          <FlatList
            data={news}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      )}
    </View>
  );
};

export default NewsListScreen;
