import React, {useState} from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    Image,
    Alert,
    ImageBackground
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeader from '../../components/header';
import {
    Avatar,
    Title,
    Caption,
    TouchableRipple,
    Button,
    TextInput
} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const EditNewsScreen = (props) => {

  let b = props.route.params.item.image;

  if(b !== ''){

    b = props.route.params.item.image_url

  }else{

    b = 'https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU'

  }


    const [image,setImage] = useState({

        uri : b,
        name : '',
        type : ''

    });


    const [height,setHeight] = useState('');

    const [title,setTitle] = useState({

        title : props.route.params.item.title,
        titleValidation : true
    });


    const [details,setDetails] = useState({

        details : props.route.params.item.details,
        detailsValidation : true

    });


    

    const openGallery = async()=>{


        const options = {

            title: 'Select Image',
            type: 'library',
            options: {
              maxHeight: 200,
              maxWidth: 200,
              selectionLimit: 1,
              mediaType: 'photo',
              includeBase64: false,
            }
        };

        try{

            const result = await launchImageLibrary(options);
            console.log(result);
            setImage({image:result.assets[0].uri});
            // setImage(result.assets[0].uri);
            // this.setState({
            //     uri: result.assets[0].uri,
            //     type: result.assets[0].type,
            //     name: result.assets[0].fileName,
            // });

            setImage({
                uri:result.assets[0].uri,
                name : result.assets[0].fileName,
                type : result.assets[0].type
            })

            console.log(image.name);
            console.log(image.uri);
            console.log(image.type);


        }catch(e){
            console.log(e)
        }

    }


    /*============Onchange Title Handle================*/

    const onChangeTitleHandle = (value)=>{

        setTitle({
            title:value,
            titleValidation:true
        })

    }


    /**==========Onchange Details Handle================ */

    const onChangeDetailsHandle = (value)=>{

        setDetails({
            details:value,
            detailsValidation:true
        });

    }


    /**===================Submit Form Data to server==================== */

    const submitData = async()=>{

        if(title.title !== '' && details.details !== ''){


            try{


                let formdata = new FormData();
                formdata.append('title',title.title);
                formdata.append('details',details.details);
                formdata.append('_method','PUT');

                if(image.name !== '' && image.type !=='' && image.uri !==''){

                    formdata.append('image',{

                        uri : image.uri,
                        type : image.type,
                        name : image.name
                    });


                }


                const res = await fetch(`https://mahatabmemorialclinic.com/api/news/update/${props.route.params.item.id}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                body: formdata
                }).catch((error) => {
                    console.error(error);
                });
                



                const json = await res.json();
                console.log(json);

                if(json.status == 'success'){

                    setTitle({title:'',titleValidation:true})
                    setDetails({details:'',detailsValidation:true})
                    setImage({
                        uri : 'https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU',
                        name : '',
                        type : ''
                    });

                    Alert.alert(json.message); 

                    props.navigation.push('NewsList');

                }


            }catch(e){

                console.log(e);
            }



            // Alert.alert('Success');
            

        }else{

            if(title.title === ''){

                setTitle({titleValidation:false});

            }

            if(details.details === ''){

                setDetails({detailsValidation:false});

            }


        }


    }



    return (
        <View style={{flex:1}}>
            <StatusBar backgroundColor='#3B3875'/>
            <CustomHeader title="Edit News" navigation={props.navigation}/>
            <ScrollView style={{flex:1,backgroundColor:'#EEF2FB'}} showsVerticalScrollIndicator={false} >
                <View style={{alignItems: 'center',flex:1}}>
                    <TouchableOpacity onPress={() => {console.log("Ok")}}>
                        <View
                        style={{
                            height: 200,
                            width: 300,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop:20
                        }}>
                        <ImageBackground
                            source={{uri:image.uri}}
                            style={{height: 200, width: 300,borderWidth:1,borderColor:'#ddd',borderRadius: 15}}
                            imageStyle={{borderRadius: 15}}>
                            <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            
                            </View>
                        </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                            <Button onPress={openGallery}>
                                <Icons name='camera-plus' size={20}/>
                            </Button>
                        </Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                            <Button onPress={()=>setImage({uri:'https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU'})}>
                                <Icons name='account-minus' size={20}/>
                            </Button>
                        </Text>
                    </View>
                </View>
                <View style={{padding:18,flex:1}}>

                    <TextInput value={title.title}  outlineColor="#2B3875" label="Enter News Title*" mode='outlined' placeholder="News Title" style={styles.textInput} onChangeText={(value)=>{onChangeTitleHandle(value)}}/>
                    <>
                      {
                        title.titleValidation ? null : <Text style={{fontSize:12,color:'red',fontFamily:'Roboto-Regular'}}>Please Enter News Title</Text>
                      }
                    </>

                    <TextInput
                        multiline outlineColor="#2B3875" mode='outlined' numberOfLines={6}
                        placeholder="News Details"
                        onContentSizeChange={(event) => {
                            setHeight({height:event.nativeEvent.contentSize.height})
                        }}
                        style={{
                        height:200, 
                        marginBottom: 11,
                        backgroundColor:'#fff',
                        fontFamily:'Roboto-Medium'
                        
                        }}
                        onChangeText={(value)=>{onChangeDetailsHandle(value)}} 
                        value={details.details}
                    />

                    <>
                      {
                        details.detailsValidation ? null : <Text style={{fontSize:12,color:'red',fontFamily:'Roboto-Regular'}}>Please Enter News Details</Text>
                      }
                    </>


                    <Button icon="pencil-plus" mode="contained" onPress={submitData} style={{backgroundColor:'#2B3875',marginTop:5}}>
                        <Text style={{fontFamily:'Roboto-Bold'}}>Edit</Text>
                    </Button>

                </View>
            </ScrollView>
        </View>
    )
}

export default EditNewsScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red'
    },
    textInput: {
      height: 38,
      backgroundColor:'#fff',
      fontFamily:'Roboto-Medium',
      marginBottom:6
    },
})