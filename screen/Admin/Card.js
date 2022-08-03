import { StyleSheet, Text, View,TouchableOpacity,Dimensions,Image,Button } from 'react-native'
import React from 'react';
import {Rating} from 'react-native-ratings';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Card = ({title,category,raiting,image,address,navigation,id}) => {

  return (

    <TouchableOpacity style={styles.Card} onPress={()=>{

        navigation.push('LawyerDetails',{id:id});

    }} >
        <View style={{flex:1,flexDirection:'row'}}>
            <View style={styles.CardImage}>
              {
                image!='' ? (
                  <Image style={{width:"100%",height:"100%",borderRadius:10}} source={image}/>
                ):(
                  <Image style={{width:"100%",height:"100%",borderRadius:10}} source={{uri:'https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU'}}/>
                )
              }
            </View>
            <View style={{flex:0.7,marginLeft:10,overflow:'hidden'}}>
              <Text style={styles.CardTitle}>{title}</Text>
              <Text style={{color:'#2B3875',fontFamily:'Roboto-Regular',marginBottom:3}}>{category}</Text>
              <Text style={{marginBottom:5,color:'#777'}}>
                <Ionicons name="location-outline" size={15}/>
                <Text style={{marginLeft:15,fontFamily:'Roboto-Regular'}}>{address}</Text>
              </Text>
              <Text>
                <Rating
                    showRating={false}
                    isDisabled={true}
                    count={5}
                    imageSize={15}
                    rating={raiting}
                  />
                  ({raiting})
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  Card : {
    backgroundColor:'#fff',
    paddingVertical:10,
    paddingHorizontal:10,
    marginHorizontal:10,
    width:windowWidth / 1.05,
    borderRadius:10,
    marginVertical:8
    
  },
  CardImage:{
    padding:0,
    flex:0.3
  },
  CardTitle:{
    fontSize:15,
    fontFamily:'Roboto-Bold'
  }

})

export default Card;

