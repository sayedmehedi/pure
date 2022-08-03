import React from 'react';
import { Appbar } from 'react-native-paper';


function CustomHeader(props) {
    let a ;
    if(!props.isHome){
      a = <Appbar.BackAction onPress={()=>{props.navigation.goBack()}} />
    }
    return (
      <Appbar.Header style={{backgroundColor:'#2B3875'}}>
        {a}
        <Appbar.Content title={props.title}/>
        {/* <Appbar.Action icon="magnify" onPress={()=>{}} /> */}
        
      </Appbar.Header>
    );
}

export default CustomHeader;
