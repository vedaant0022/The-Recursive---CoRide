import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {

    const navigation = useNavigation()

    

  return (
    <View>
      <View>
        <ImageBackground
        source={{uri:'https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
        style={{height:'100%',width:'100%'}}
        >
        <View style={{top:'50%',flexDirection:'row',left:'14%'}}>
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
                
                />
            </View>

            <View style={{borderWidth:1,borderColor:'#fff',width:320,height:40,borderRadius:12,marginTop:'8%'}}>
                <TextInput
                placeholder='Enter Your Password'
                style={{color:'#fff',textAlign:'center'}}
                placeholderTextColor={'white'}
                
                />
            </View>

            <View style={{borderWidth:1,borderColor:'#fff',width:320,height:40,borderRadius:12,marginTop:'8%'}}>
                <TextInput
                placeholder='Confirm Password'
                style={{color:'#fff',textAlign:'center'}}
                placeholderTextColor={'white'}
                
                />
            </View>

            <View style={{top:'18%',left:'25%',borderWidth:1,width:130,borderColor:'#fff',backgroundColor:'#fff',height:45,borderRadius:15}}>
                <TouchableOpacity>
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