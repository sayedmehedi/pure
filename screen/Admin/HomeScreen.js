import React,{useEffect} from 'react'
import { View,Text,StyleSheet,ScrollView } from 'react-native';
import CustomHeader from '../../components/header';
import { Surface } from 'react-native-paper';



function HomeScreen(props) {
    return (
      <View style={{ flex: 1}}>
        <CustomHeader title="Home" isHome="true" navigation={props.navigation}/>
        <View style={{flex:1,margin:15}}>

        <ScrollView style={{flex:1,backgroundColor:'#EEF2FB'}} showsVerticalScrollIndicator={false} >
            <Surface style={styles.surface} elevation={2}>
              <Text style={{marginBottom:10,fontFamily:'Roboto-Bold',fontSize:17}}>Today Total Transaction</Text>
              <View style={{alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'#A2D371',fontFamily:'Roboto-Black',fontSize:16}}>&#x09F3;1000000</Text>
              </View>
          </Surface>
          <Surface style={styles.surface} elevation={2}>
              <Text style={{marginBottom:10,fontFamily:'Roboto-Bold',fontSize:17}}>Total Client</Text>
              <View style={{alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'#A2D371',fontFamily:'Roboto-Black',fontSize:16}}>50000</Text>
              </View>
          </Surface>
          <Surface style={styles.surface} elevation={2}>
              <Text style={{marginBottom:10,fontFamily:'Roboto-Bold',fontSize:17}}>Total Lawyer</Text>
              <View style={{alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'#A2D371',fontFamily:'Roboto-Black',fontSize:16}}>1000000</Text>
              </View>
          </Surface>
      
        </ScrollView>
        </View>
      </View>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    borderLeftColor:'#1B618C',
    borderLeftWidth:5,
    marginBottom:10
  },
});