import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsListScreen from './NewsListScreen'
import CreateNewsScreen from './CreateNewsScreen'
import EditNewsScreen from './EditNewsScreen';


const NewsStack = createNativeStackNavigator();

 const AdminNewsStack = ({navigation})=>(

    <NewsStack.Navigator initialRouteName="NewsList" screenOptions = {{headerShown:false}}>
        <NewsStack.Screen name="NewsList" component={NewsListScreen}/>
        <NewsStack.Screen name="EditNews" component={EditNewsScreen}/>
    </NewsStack.Navigator>

) 


export default AdminNewsStack;


