import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {

    const navigation = useNavigation()

    const [user,setuser] = useState('');
    const [password,setPassword] = useState('');
    const [confirmpassword,setconfirmpassword] = useState('');

    const postsignup = () => {
        const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "username": user,
      "password": password,
      "confirmpassword": confirmpassword
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("https://1d7b-182-74-22-86.ngrok-free.app/signup", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
          
      }

  return (
    <View>
      <View>
        <ImageBackground
        source={{uri:'https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
        style={{height:'100%',width:'100%'}}
        >
        <View style={{top:100,flexDirection:'row',left:'14%'}}>
            <View>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/456/456212.png'}}
                style={{height:40,width:40,tintColor:'#fff'}}
                />

            </View>
            <View>
                <Text style={{color:'#fff',fontSize:21,fontWeight:'800',paddingLeft:'5%',paddingTop:'1%'}}>Signup</Text>
            </View>
        </View>

        <View style={{top:'32%',alignContent:'center',alignSelf:'center'}}>
            <View style={{borderWidth:1,borderColor:'#fff',width:320,height:40,borderRadius:12}}>
                <TextInput
                placeholder='Enter Your Name'
                style={{color:'#fff',textAlign:'center'}}
                placeholderTextColor={'white'}
                value={user}
                onChangeText={setuser}
                />
            </View>

            <View style={{borderWidth:1,borderColor:'#fff',width:320,height:40,borderRadius:12,marginTop:'8%'}}>
                <TextInput
                placeholder='Enter Your Password'
                style={{color:'#fff',textAlign:'center'}}
                placeholderTextColor={'white'}
                value={password}
                onChangeText={setPassword}
                
                />
            </View>

            <View style={{borderWidth:1,borderColor:'#fff',width:320,height:40,borderRadius:12,marginTop:'8%'}}>
                <TextInput
                placeholder='Confirm Password'
                style={{color:'#fff',textAlign:'center'}}
                placeholderTextColor={'white'}
                value={confirmpassword}
                onChangeText={setconfirmpassword}
                
                />
            </View>

            <View style={{top:'18%',left:'25%',borderWidth:0.1,width:130,borderColor:'grey',backgroundColor:'#71f884',height:45,borderRadius:15}}>
                <TouchableOpacity
                onPress={()=>{postsignup()}}
                >
                    <Text style={{color:'black',fontSize:21,fontWeight:'900',textAlign:'center',paddingTop:'2.5%'}}>Signup</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop:'66%',flexDirection:'row',left:'10%'}}>
                <View>
                    <Text style={{color:'#fff'}}>Already Have an account?</Text>
                </View>
                <View>
                    <TouchableOpacity
                    onPress={()=>{navigation.navigate('Login')}}
                    >
                        <Text style={{color:'yellow',paddingLeft:'1%'}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>




        </ImageBackground>

        
            
      </View>
    </View>
  )
}

export default Signup