import React, { Component, useState } from 'react';
import { ActivityIndicator,Text,View,StyleSheet,ScrollView,Dimensions,ImageBackground,TouchableOpacity,Image,Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar,Title,Caption,TouchableRipple,Button,TextInput } from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import CustomHeader from '../../components/header'


const items = [
  // this is the parent or 'item'
  {
    name: 'Practice Area',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Admiralty & Maritime',
        id: 1,
      },
      {
        name: 'Arbitration & ADR',
        id: 2,
      },
      {
        name: 'Accounting & Finance',
        id: 3,
      },
      {
        name: 'Company & Corporate Law',
        id: 4,
      },
      {
        name: 'Criminal Prosecution & Defense',
        id: 5,
      },
      {
        name: 'Family Law',
        id: 6,
      },
      {
        name: 'High Court Law',
        id: 7,
      },
    ],
  },
  

];



  /*======================District Array List=====================*/

  const district = [
    // this is the parent or 'item'
    {
      value: 'Select District From Here',
      id: 0,
      // these are the children or 'sub items'
      list: [
        { _id: '1', value: 'Dhaka' },
        { _id: '2', value: 'Faridpur' },
        { _id: '3', value: 'Gazipur' },
        { _id: '4', value: 'Gopalganj' },
        { _id: '5', value: 'Jamalpur' },
        { _id: '6', value: 'Kishoreganj' },
        { _id: '7', value: 'Madaripur' },
        { _id: '8', value: 'Manikganj' },
        { _id: '9', value: 'Munshiganj' },
        { _id: '10', value: 'Mymensingh' },
        { _id: '11', value: 'Narayanganj' },
        { _id: '12', value: 'Narsingdi' },
        { _id: '13', value: 'Netrokona' },
        { _id: '14', value: 'Rajbari' },
        { _id: '15', value: 'Shariatpur' },
        { _id: '16', value: 'Sherpur' },
        { _id: '17', value: 'Tangail' },
        { _id: '18', value: 'Bogura' },
        { _id: '20', value: 'Naogaon' },
        { _id: '21', value: 'Natore' },
        { _id: '22', value: 'Nawabganj' },
        { _id: '23', value: 'Pabna' },
        { _id: '24', value: 'Rajshahi' },
        { _id: '25', value: 'Sirajgonj' },
        { _id: '26', value: 'Dinajpur' },
        { _id: '27', value: 'Gaibandha' },
        { _id: '28', value: 'Kurigram' },
        { _id: '29', value: 'Lalmonirhat' },
        { _id: '30', value: 'Nilphamari' },
        { _id: '31', value: 'Panchagarh' },
        { _id: '32', value: 'Rangpur' },
        { _id: '33', value: 'Thakurgaon' },
        { _id: '34', value: 'Barguna' },
        { _id: '35', value: 'Barishal' },
        { _id: '36', value: 'Bhola' },
        { _id: '37', value: 'Jhalokati' },
        { _id: '38', value: 'Patuakhali' },
        { _id: '39', value: 'Pirojpur' },
        { _id: '40', value: 'Bandarban' },
        { _id: '41', value: 'Brahmanbaria' },
        { _id: '42', value: 'Chandpur' },
        { _id: '43', value: 'Chattogram' },
        { _id: '44', value: 'Cumilla' },
        { _id: '45', value: "Cox's Bazar" },
        { _id: '46', value: 'Feni' },
        { _id: '47', value: 'Khagrachari' },
        { _id: '48', value: 'Lakshmipur' },
        { _id: '49', value: 'Noakhali' },
        { _id: '50', value: 'Rangamati' },
        { _id: '51', value: 'Habiganj' },
        { _id: '52', value: 'Maulvibazar' },
        { _id: '53', value: 'Sunamganj' },
        { _id: '54', value: 'Sylhet' },
        { _id: '55', value: 'Bagerhat' },
        { _id: '56', value: 'Chuadanga' },
        { _id: '57', value: 'Jashore' },
        { _id: '58', value: 'Jhenaidah' },
        { _id: '59', value: 'Khulna' },
        { _id: '60', value: 'Kushtia' },
        { _id: '61', value: 'Magura' },
        { _id: '62', value: 'Meherpur' },
        { _id: '63', value: 'Narail' },
        { _id: '64', value: 'Satkhira' },
  
      ],
    },
    
  
  ];




export default class LawyerDetails extends Component {

  constructor(){

    super();
    this.state = {

      lawyername : '',
      phone : '',
      email: '',
      nid : '',
      registration_number:'',
      enrolment_number:'',
      years_of_practice:'',
      current_chamber_name:'',
      previous_chamber_name:'',
      renowned_case_name:'',
      details:'',
      bar_name:'',
      password:'',
      PasswordValidation:true,
      NameValidation:true,
      PhoneValidation:true,
      DistrictValidation:true,
      PracticeAreaValidation:true,
      image : "https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU",
      uri : '',
      type : '',
      name : '',
      height : '',
      selectedPracticeItems: [],
      selectedDistrict : [],
      selectedDistrictValue : [],
      isLoading:false

    }
    

  }


  options = {

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

openGallery = async()=>{

    try{

        const result = await launchImageLibrary(this.options);
        console.log(result);
        this.setState({image:result.assets[0].uri});
        // setImage(result.assets[0].uri);
        this.setState({
            uri: result.assets[0].uri,
            type: result.assets[0].type,
            name: result.assets[0].fileName,
        });

    }catch(e){
        console.log(e)
    }

}

/*===========ONChange Phone Handler==============*/
onChangePhoneHandle = (value)=>{

    this.setState({phone:value,PhoneValidation:true});

}



/*===========ONChangeName Handler==============*/
onChangeNameHandle = (value)=>{
    this.setState({lawyername:value,NameValidation:true});

}


/**=======OnChange Email Handler============ */
onChangeEmailHandle = (value)=>{

    this.setState({email:value});

}


/**=======OnChange Nid Handler============ */
onChangeNidHandle = (value)=>{

    this.setState({nid:value})

}


/**=======Barname Handler============ */
onChangeBarNameHandle = (value)=>{

    this.setState({bar_name:value});

}



/**=======Password Handler============ */
onChangePasswordHandle = (value)=>{

    this.setState({
        password:value,
        PasswordValidation:true
    });

}


/**=======Enrolement Handler============ */
onChangeEnrolementNumberHandle = (value)=>{

    this.setState({
        enrolment_number:value
    })


}


/**=======Years Of Practice Handler============ */
onChangeYearsOfPracticeHandle = (value)=>{

    this.setState({
        years_of_practice:value
    });

}


/**=======Ronowned Case Handler============ */
onChangeRenownedCaseNameHandle = (value)=>{

    this.setState({
        renowned_case_name:value
    });

}


/**=======onChange Current Chember Handler============ */
onChangeCurrentChemberHandle = (value)=>{

    this.setState({
        current_chamber_name:value
    });

}



/**=======onChangePrevious Chember Handler============ */
onChangePreviousChemberHandle = (value)=>{

    this.setState({
        previous_chamber_name:value
    });

}


/**=======onChangePrevious Chember Handler============ */
onChangeDetailsHandle = (value)=>{

    this.setState({
        details:value
    });

}


/**=======Select Practice Area============ */
onSelectedItemsChange = (selectedPracticeItems) => {
    this.setState({ selectedPracticeItems,PracticeAreaValidation:true });
    
  };

/**=======Select Practice Area============ */
onSelectedDistrictChange = (selectedDistrict) => {
    this.setState({ selectedDistrict });
    
  };
/**=======Select District Value============ */
onSelectedValuDistrict = (selectedDistrictValue) => {
    this.setState({ selectedDistrictValue });
    
};




  getLawyerDetails = async()=>{

    this.setState({isLoading:true})

    const BASE_URI = `https://mahatabmemorialclinic.com/api/lawyer/${this.props.route.params.id}`

    try{
        const response = await fetch(BASE_URI,{
        method: 'GET',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        })

      const json = await response.json();
      console.log(json.data);

      /*Find lawyer practice area*/
      var array_nodes = [];
        json.data.lcategories.forEach(function(d) {
            array_nodes.push(d.id);
       });
       
      /*Find lawyer district*/
      var district_id = [];
      district[0].list.forEach(function(d) {
        if(d.value === json.data.district){
          district_id.push(d._id);
        }
     });  

     console.log(district_id);

      this.setState({
        lawyername:json.data.name,
        phone:json.data.phone,
        email:json.data.email,
        nid:json.data.nid,
        selectedPracticeItems:array_nodes,
        selectedDistrict : district_id,
        // selectedDistrictValue : district_id,
        bar_name:json.data.bar_name,
        enrolment_number:json.data.enrolment_number,
        years_of_practice:json.data.years_of_practice,
        renowned_case_name:json.data.renowned_case_name ? json.data.renowned_case_name: '',
        current_chamber_name:json.data.current_chamber_name,
        previous_chamber_name:json.data.previous_chamber_name,
        details:json.data.details,
        image:json.data.image_url


      })

      this.setState({isLoading:false});

    }catch(e){
      console.log(e);
    }

  }

  componentDidMount(){

   
    this.getLawyerDetails();


  }


  clearInputField = ()=>{

    this.setState({

        lawyername : '',
        phone : '',
        email: '',
        nid : '',
        registration_number:'',
        enrolment_number:'',
        years_of_practice:'',
        current_chamber_name:'',
        previous_chamber_name:'',
        renowned_case_name:'',
        details:'',
        bar_name:'',
        password:'',
        PasswordValidation:true,
        NameValidation:true,
        PhoneValidation:true,
        DistrictValidation:true,
        PracticeAreaValidation:true,
        image : "https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU",
        uri : '',
        type : '',
        name : '',
        height : '',
        selectedPracticeItems: [],
        selectedDistrict : [],
        selectedDistrictValue : []

    });


}



  submitData = async()=>{
    // console.log(this.state.selectedDistrictValue[0].value);
    if(this.state.lawyername !== '' && this.state.phone !== '' && this.state.selectedPracticeItems.length !== 0){

        // console.log("URi :"+this.state.uri);

        // console.log('Lawyer Name: '+ this.state.lawyername);
        // console.log('Name: '+ this.state.name);
        // console.log('Phone: '+ this.state.phone);
        // console.log('email: '+ this.state.email);
        // console.log('password: '+ this.state.password);
        // console.log('NID: '+ this.state.nid);
        // console.log('Bar Name: '+ this.state.bar_name);
        // console.log('Enrolement: '+ this.state.enrolment_number);
        // console.log('Years Of Pract: '+ this.state.years_of_practice);
        // console.log('renowned Case: '+ this.state.renowned_case_name);
        // console.log('current chamber: '+ this.state.current_chamber_name);
        // console.log('previous Chember: '+ this.state.previous_chamber_name);
        // console.log('Details: '+ this.state.details);

        /*====================SubMit All Data To The Server==========================*/

        const formData = new FormData();
        formData.append('name', this.state.lawyername); 
        formData.append('phone', this.state.phone); 
        // formData.append('nid', this.state.nid); 
        formData.append('email', this.state.email); 
        
        formData.append('bar_name', this.state.bar_name);
        formData.append('enrolment_number', this.state.enrolment_number);
        formData.append('years_of_practice', this.state.years_of_practice);
        formData.append('renowned_case_name', this.state.renowned_case_name);
        formData.append('current_chamber_name', this.state.current_chamber_name);
        formData.append('previous_chamber_name', this.state.previous_chamber_name);
        formData.append('details', this.state.details);
        
        if(this.state.uri !== '' && this.state.type !== '' && this.state.name !== ''){

            formData.append('image',{
                uri : this.state.uri,
                type: this.state.type,
                name: this.state.name
            });

        }


        const a = this.state.selectedDistrict;

        var district_name = '';
        district[0].list.forEach(function(d) {
        if(d._id == a){
          district_name = d.value;
        }
        });

        formData.append('district', district_name);




        

        formData.append('lawcategory',JSON.stringify(this.state.selectedPracticeItems));

        const res = await fetch(`https://mahatabmemorialclinic.com/api/lawyer/${this.props.route.params.id}/update`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            //   'Content-Type': 'application/json'
            'Content-Type': 'multipart/form-data'
        },
        body: formData
        }).catch((error) => {
            console.error(error);
        });

        

        



        const json = await res.json();
        console.log(json);

        this.clearInputField();

        this.props.navigation.push('Lawyer');
        


        

    }else{

        if(this.state.lawyername ===''){

            this.setState({NameValidation:false})


        }

        if(this.state.phone ===''){

            this.setState({PhoneValidation:false})


        }

        if(this.state.password ===''){

            this.setState({PasswordValidation:false})


        }

        if(this.state.selectedPracticeItems.length === 0){

            this.setState({PracticeAreaValidation:false})


        }


    }

}

  


  render(){
    

    return (
      
        this.state.isLoading ? 
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <ActivityIndicator size="large"/>
        </View>:
        <View style={{flex:1}}>
            <CustomHeader title="Lawyer Details" navigation={this.props.navigation}/>
            <ScrollView style={{flex:1,backgroundColor:'#EEF2FB'}} showsVerticalScrollIndicator={false} >

                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => {console.log("Ok")}}>
                        <View
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop:20
                        }}>
                        <ImageBackground
                            source={{uri:this.state.image}}
                            style={{height: 100, width: 100,borderWidth:1,borderColor:'#ddd',borderRadius: 15}}
                            imageStyle={{borderRadius: 15}}>
                            <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Icons
                                name="camera"
                                size={35}
                                color="#fff"
                                style={{
                                opacity: 0.7,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: '#fff',
                                borderRadius: 10,
                                }}
                            />
                            </View>
                        </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                            <Button onPress={this.openGallery}>
                                <Icons name='camera-plus' size={20}/>
                            </Button>
                        </Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                            <Button onPress={()=>this.setState({image:'hhhh'})}>
                                <Icons name='account-minus' size={20}/>
                            </Button>
                        </Text>
                    </View>
                </View>



                <View style={{padding:18,flex:1}}>
                    

                    <TextInput value={this.state.lawyername} outlineColor="#2B3875" label="Enter Name*" mode='outlined' placeholder="Name" style={styles.textInput} onChangeText={(value)=>{this.onChangeNameHandle(value)}}/>
                    <>
                      {
                          this.state.NameValidation ? null : <Text style={{fontSize:12,color:'red',fontFamily:'Roboto-Regular'}}>Please Enter Lawyer Name</Text>
                      }
                      </>
                    <>

                    <TextInput disabled value={this.state.phone} outlineColor="#2B3875" label="Enter Phone*" mode='outlined' placeholder="Phone" style={styles.textInput} onChangeText={(value)=>{this.onChangePhoneHandle(value)}}/>
                      {
                          this.state.PhoneValidation ? null : <Text style={{fontSize:12,color:'red',fontFamily:'Roboto-Regular'}}>Please Enter Lawyer Phone</Text>
                      }
                    </>


                    <TextInput disabled value={this.state.email} outlineColor="#2B3875" label="Enter Email" mode='outlined' placeholder="Email" style={styles.textInput} onChangeText={(value)=>{this.onChangeEmailHandle(value)}}/>


                    <TextInput disabled value={this.state.nid} outlineColor="#2B3875" label="Enter NID"  mode='outlined' placeholder="Enter NID Number" style={styles.textInput} onChangeText={(value)=>{this.onChangeNidHandle(value)}}/> 



                    <SectionedMultiSelect
                        items={items}
                        IconRenderer={Icon}
                        uniqueKey="id"
                        subKey="children"
                        selectText="Select Practice Area"
                        showDropDowns={true}
                        readOnlyHeadings={true}
                        onSelectedItemsChange={this.onSelectedItemsChange}
                        selectedItems={this.state.selectedPracticeItems}
                        styles={{selectToggle:{backgroundColor:'#fff',padding:8,borderWidth:1,borderColor:'#2B3875',borderRadius:5,marginVertical:6},selectToggleText:{color:'#7d7e7c'}}}
                        expandDropDowns={true}
                        searchPlaceholderText="Search Practice Area Here"
                    />
                    <>
                      {
                          this.state.PracticeAreaValidation ? null : <Text style={{fontSize:12,color:'red',fontFamily:'Roboto-Regular'}}>Please Select Practice Area</Text>
                      }
                      </>


                    <SectionedMultiSelect
                        items={district}
                        IconRenderer={Icon}
                        uniqueKey="_id"
                        displayKey="value"
                        subKey="list"
                        selectText="Select District"
                        showDropDowns={true}
                        readOnlyHeadings={true}
                        onSelectedItemsChange={this.onSelectedDistrictChange}
                        onSelectedItemObjectsChange={this.onSelectedValuDistrict}
                        selectedItems={this.state.selectedDistrict}
                        styles={{selectToggle:{backgroundColor:'#fff',padding:8,borderWidth:1,borderColor:'#2B3875',borderRadius:5,marginVertical:6},selectToggleText:{color:'#7d7e7c'}}}
                        expandDropDowns={true}
                        searchPlaceholderText="Search District Here"
                        single={true}
                    />


                    <TextInput
                            outlineColor="#2B3875"
                            label="Enter Bar Name"
                            mode='outlined'
                            placeholder="Enter Bar Name"
                            style={styles.textInput}
                            onChangeText={(value)=>{this.onChangeBarNameHandle(value)}}
                            value={this.state.bar_name}
                        />    
                        <TextInput
                            outlineColor="#2B3875"
                            label="Enter Enrolement Number"
                            mode='outlined'
                            placeholder="Enter Enrolement Number"
                            style={styles.textInput}
                            onChangeText={(value)=>{this.onChangeEnrolementNumberHandle(value)}}
                            value={this.state.enrolment_number}
                        />    
                        <TextInput
                            outlineColor="#2B3875"
                            label="Enter Years Of Practice"
                            mode='outlined'
                            placeholder="Enter Years Of Practice"
                            style={styles.textInput}
                            onChangeText={(value)=>{this.onChangeYearsOfPracticeHandle(value)}}
                            value={this.state.years_of_practice}
                        />    

                        <TextInput
                            outlineColor="#2B3875"
                            label="Enter Renowned Case Name"
                            mode='outlined'
                            placeholder="Enter Renowned Case Name"
                            style={styles.textInput}
                            onChangeText={(value)=>{this.onChangeRenownedCaseNameHandle(value)}}
                            value={this.state.renowned_case_name}
                        />

                        <TextInput
                            outlineColor="#2B3875"
                            label="Enter Current Chember Name"
                            mode='outlined'
                            placeholder="Enter Current Chember Name"
                            style={styles.textInput}
                            onChangeText={(value)=>{this.onChangeCurrentChemberHandle(value)}}
                            value={this.state.current_chamber_name}
                        />

                        <TextInput
                            outlineColor="#2B3875"
                            label="Enter Previous Chember Name"
                            mode='outlined'
                            placeholder="Enter Previous Chember Name"
                            style={styles.textInput}
                            onChangeText={(value)=>{this.onChangePreviousChemberHandle(value)}}
                            value={this.state.previous_chamber_name}
                        />


                      <TextInput
                          multiline outlineColor="#2B3875" mode='outlined' numberOfLines={4}
                          placeholder="Lawyer Details"
                          onContentSizeChange={(event) => {
                            this.setState({height:event.nativeEvent.contentSize.height})
                          }}
                          style={{
                          height:80, 
                          marginBottom: 11,
                          backgroundColor:'#fff',
                          fontFamily:'Roboto-Medium'

                          }}
                          onChangeText={(value)=>{this.onChangeDetailsHandle(value)}} 
                          value={this.state.details}
                      />



                    <Button icon="pencil-plus" mode="contained" onPress={this.submitData} style={{backgroundColor:'#2B3875',marginTop:5}}>
                      <Text style={{fontFamily:'Roboto-Bold'}}>Update</Text>
                    </Button>
                    
                </View>
            </ScrollView>
        </View>

    )

  }
  
  
}


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

