
import React, { Component, useEffect, useState } from 'react';
import { StatusBar,ActivityIndicator,Text,View,StyleSheet,ScrollView,Dimensions,FlatList,TouchableOpacity,Image,Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomHeader from '../../components/header';
import { Avatar,Title,Caption,TouchableRipple,Button,TextInput } from 'react-native-paper';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-ratings';
import Card from './Card';
import { Searchbar } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function LawyerList(props){

    const [searchQuery, setSearchQuery] = useState('');
    const [lawyer,setLawyer] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [isLoading,setIsLoading] = useState(false);
    const [lastPage,setLastPage] = useState(0);


    /**=================Search Query============== */

    const onChangeSearch = (query) =>{
        setSearchQuery(query);
    };

    const getLawyer = async()=>{

        setIsLoading(true);
        // fetch(`https://mahatabmemorialclinic.com/api/lawyers?paginate=1&page=${currentPage}`,{
        //   method: 'GET',
        //   headers:{
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json'
        //   }
        // })
        // .then(response => response.json())
        // .then(json =>{
        //     setLawyer([...lawyer,...json.data.data]);
        //     setIsLoading(false);
        // })

       

            const BASE_URI = `https://mahatabmemorialclinic.com/api/lawyers?paginate=1&page=${currentPage}&per_page=10`


        try{

            const response = await fetch(BASE_URI,{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
            })

            const json = await response.json();

            
            setLawyer([...lawyer,...json.data.data]);
            setIsLoading(false);
            setLastPage(json.data.last_page);


        }catch(e){
            console.log(e);
        }

    }


    const renderItem = ({item})=>{

        return(
            <Card id={item.id} title={item.name} raiting={4} category="Criminal" address="Mohammadpur , Dhaka" image={{uri:item.image_url}} navigation={props.navigation} />
        )

    }


    const renderLoader = ()=>{

        return(
            isLoading ?
            <View style={{marginVertical:16,alignItems:'center'}}>
                <ActivityIndicator size="large" color="#aaa" />
            </View> : null
        )
    };


    const loadMoreItem = ()=>{

        if(currentPage <= lastPage){
            setCurrentPage(currentPage+1);
        }
    };


    useEffect(()=>{

        console.log(currentPage);

        getLawyer();

    },[currentPage])

    

    return(
        
        <View style={{ flex: 1}}>
            <StatusBar backgroundColor='#3B3875'/>
            <CustomHeader title="Search" isHome="true" navigation={props.navigation}/>
        <View style={{margin:10}}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </View>
        <View style={{flex:1}}>
            

            {/* <Card title="Barister Md.Noyon Miya" raiting={4} category="Criminal" address="Mohammadpur , Dhaka" image={require('../../assets/images/16.jpg')} navigation={props.navigation}></Card> */}

            <FlatList
                data={lawyer}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                ListFooterComponent={renderLoader}
                onEndReached={loadMoreItem}
                onEndReachedThreshold={0.1}
            />
            
           
        </View>
      </View>
    )
}



