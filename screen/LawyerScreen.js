import React, {useEffect, useState} from 'react';
import {

  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Card from '../components/Card';
import CustomHeader from '../components/header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


const TopTab = createMaterialTopTabNavigator();

/*==============Corporate==========Lawyer List */
function Corporate({navigation}) {
  const [lawyer, setLawyer] = useState([]);

  /**==============Get Lawyer================ */
  const getLawyer = async () => {
    const BASE_URI = `https://mahatabmemorialclinic.com/api/lawyers?paginate=1&page=1&per_page=20&category=Corporate`;

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

  useEffect(() => {
    getLawyer();
  }, []);

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.CardView}>
        {lawyer.map(item => {
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
      </View>
    </ScrollView>
  );
}

/*==============TradeMark==========Lawyer List */

function TradeMark({navigation}) {
  const [lawyer, setLawyer] = useState([]);

  /**==============Get Lawyer================ */
  const getLawyer = async () => {
    const BASE_URI = `https://mahatabmemorialclinic.com/api/lawyers?paginate=1&page=1&per_page=20&category=Trademark`;

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

  useEffect(() => {
    getLawyer();
  }, []);

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.CardView}>
        {lawyer.map(item => {
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
      </View>
    </ScrollView>
  );
}

/*==============CyperCrime==========Lawyer List */

function CyperCrime({navigation}) {
  const [lawyer, setLawyer] = useState([]);

  /**==============Get Lawyer================ */
  const getLawyer = async () => {
    const BASE_URI = `https://mahatabmemorialclinic.com/api/lawyers?paginate=1&page=1&per_page=20&category=Cyber Crime`;

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

  useEffect(() => {
    getLawyer();
  }, []);

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.CardView}>
        {lawyer.map(item => {
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
      </View>
    </ScrollView>
  );
}

/*==============Criminal==========Lawyer List */

function Criminal({navigation}) {
  const [lawyer, setLawyer] = useState([]);

  /**==============Get Lawyer================ */
  const getLawyer = async () => {
    const BASE_URI = `https://mahatabmemorialclinic.com/api/lawyers?paginate=1&page=1&per_page=20&category=Criminal`;

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

  useEffect(() => {
    getLawyer();
  }, []);

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.CardView}>
        {lawyer.map(item => {
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
      </View>
    </ScrollView>
  );
}

function FamilyLaw({navigation}) {
  const [lawyer, setLawyer] = useState([]);

  /**==============Get Lawyer================ */
  const getLawyer = async () => {
    const BASE_URI = `https://mahatabmemorialclinic.com/api/lawyers?paginate=1&page=1&per_page=20&category=Family Law`;

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

  useEffect(() => {
    getLawyer();
  }, []);

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.CardView}>
        {lawyer.map(item => {
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
      </View>
    </ScrollView>
  );
}

function LawyerScreen({navigation, route}) {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Lawyer" isHome="true" navigation={navigation} />

      <TopTab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: 'blue',
            height: 3,
          },
        }}
        sceneContainerStyle={{backgroundColor: '#EEF2FB'}}>
        <TopTab.Screen name="Corporate" component={Corporate} />
        <TopTab.Screen name="Criminal" component={Criminal} />
        <TopTab.Screen name="Trade Mark" component={TradeMark} />
        <TopTab.Screen name="Cyber Crime" component={CyperCrime} />
        <TopTab.Screen name="Family Law" component={FamilyLaw} />
      </TopTab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  CardView: {},
});

export default LawyerScreen;
