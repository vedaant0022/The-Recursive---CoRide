import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Start = () => {

    const navigation = useNavigation()

  return (
    <View>
        <View>
            <ImageBackground 
            source={{uri:'https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 464w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 764w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 928w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1064w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1364w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1528w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1664w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1964w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2128w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2264w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2564w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2728w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2864w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3164w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3328w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3464w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3764w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=3928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3928w, https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4000w'}}
            style={{height:'100%',width:'100%'}}
            >
                <View style={{alignItems:'center',marginTop:'45%'}}>
                    <Text style={{color:'#fff',fontSize:48,fontWeight:'900'}}>CoRide</Text>
                </View>

                <View style={{top:'120%',flexDirection:'row',justifyContent:'space-evenly'}}>
                    <View style={{borderWidth:0.1,borderColor:'grey',width:122,height:50,borderRadius:20,backgroundColor:'#71f884'}}>
                        <TouchableOpacity 
                        onPress={()=>{navigation.navigate('Signup')}}
                        >
                            <Text style={{color:'#000000',fontSize:21,textAlign:'center',paddingTop:'5%',fontWeight:'800'}}>Signup</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{borderWidth:1,borderColor:'#fff',width:126,height:50,borderRadius:20,}}>
                        <TouchableOpacity
                        onPress={()=>{navigation.navigate('Login')}}
                        >
                            <Text style={{color:'#fff',fontSize:21,textAlign:'center',paddingTop:'4%',fontWeight:'800'}}>Login</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            
            </ImageBackground>
            
        </View>
    </View>
  )
}

export default Start