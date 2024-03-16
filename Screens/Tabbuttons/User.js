import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View  , Image, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';

export default function App() {

  const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor:'#fff'}}>
    <View style={{backgroundColor:'#fff',marginLeft:'2%',marginRight:'2%',marginBottom:'-40%'}}>

    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flexDirection:'row' , marginTop:15}}>
        <View style={{marginLeft:12 , marginTop:5}}>
        <Text style={{fontSize:35,fontWeight:'800'}}> Hello, Admin</Text>
        </View>
        <View style={{marginLeft:80}}>
          <Image style={
            {height:60 , width:60}
          } source={{uri:'https://cdn-icons-png.flaticon.com/512/149/149071.png'}}/>
        </View>
       </View>
       <View style={{marginLeft:20 , backgroundColor:'lightyellow' , width:80, height:40, borderRadius:10 , flexDirection:'row'}}>
        <Image style={{width:30 , height:30 ,marginVertical:5 , marginLeft:5}} source={{uri:'https://cdn-icons-png.flaticon.com/128/7937/7937682.png'}}/>
       
        <Text style={{fontSize:15 , marginTop:12}}>4.9</Text>
       </View>

       

       <View style={{flexDirection:'row',}}>
        <TouchableOpacity>
        <View style={{ marginTop:25, backgroundColor:'#f2f2f3',width:120, height:120 , border:2 , borderRadius:25}}>
          <View style={{alignItems:'center' , marginTop:30}}>
          <Image style={{width:25 , height:25}} source={{uri:'https://cdn-icons-png.flaticon.com/128/471/471664.png'}}/>
          </View>
          <View style={{marginLeft:40,marginTop:8}}>
            <Text style={{fontSize:20 , fontWeight:300}}>
              Help
            </Text>
          </View>
        

        </View>
        </TouchableOpacity>
      
<TouchableOpacity>
      <View style={{ marginLeft:5,marginTop:25, backgroundColor:'#f2f2f3',width:120, height:120 , border:2 , borderRadius:25}}>
        <View style={{alignItems:'center' , marginTop:30}}>
          <Image style={{width:25 , height:25}} source={{uri:'https://cdn-icons-png.flaticon.com/128/60/60484.png'}}/>
          </View>
          <View style={{marginLeft:35, marginTop:8}}>
            <Text style={{fontSize:20 , fontWeight:300}}>
              Wallet
            </Text>
          </View>
          

        </View></TouchableOpacity>
  <TouchableOpacity>
      <View style={{ marginLeft:5,marginTop:25, backgroundColor:'#f2f2f3',width:120, height:120 , border:2 , borderRadius:25}}>
        <View style={{alignItems:'center' , marginTop:30}}>
          <Image style={{width:25 , height:25}} source={{uri:'https://cdn-icons-png.flaticon.com/128/8888/8888024.png'}}/>
          </View>
          <View style={{marginLeft:35, marginTop:8}}>
            <Text style={{fontSize:20 , fontWeight:300}}>
              Activity
            </Text>
          </View>

        </View></TouchableOpacity>
       </View>


       <TouchableOpacity>
       <View style={{backgroundColor:'#f2f2f3',width:375, height:140 , border:2 , borderRadius: 22 , marginTop:25 }}>
        <View style={{flexDirection:'row'}}>

          <View>
            <View style={{marginLeft:10 , marginTop:15}}>
              <Text style={{fontSize:22,fontWeight:'700'}}>You Have Multiple promos </Text>
              <Text style={{fontSize:20}}></Text>

            </View>
            <View style={{marginLeft:10 , marginTop:0}}>
             <Text style={{fontSize:19}}>We saves you most   </Text> 
             <Text style={{fontSize:19}}> that saves you most</Text>

            </View>
          </View>
          <View style={{marginLeft:10 , marginTop:30}}>
         <Image style={{width:80 ,height:80}} source={{uri:'https://cdn-icons-png.flaticon.com/128/3263/3263403.png'}}/>
          </View>

        </View>

       </View></TouchableOpacity>

       <TouchableOpacity>
       <View style={{backgroundColor:'#f2f2f3',width:375, height:150 , border:2 , borderRadius: 22 , marginTop:25}}>
        <View style={{flexDirection:'row'}}>

          <View>
            <View style={{marginLeft:10 , marginTop:15}}>
              <Text style={{fontSize:24,fontWeight:'700'}}>Safety check-up </Text>
              <Text style={{fontSize:20}}></Text>

            </View>
            <View style={{marginLeft:10 , marginTop:5}}>
             <Text style={{fontSize:19}}>Boast your Safety profile by    </Text> 
             <Text style={{fontSize:19}}> turning additional feature</Text>

            </View>
          </View>
          <View style={{marginLeft:10 , marginTop:30}}>
         <Image style={{width:80 ,height:80}} source={{uri:'https://cdn-icons-png.flaticon.com/128/12299/12299241.png'}}/>
          </View>

        </View>    

       </View></TouchableOpacity>

<TouchableOpacity>
       <View style={{backgroundColor:'#f2f2f3',width:375, height:150 , border:2 , borderRadius: 22 , marginTop:25}}>
        <View style={{flexDirection:'row'}}>

          <View>
            <View style={{marginLeft:10 , marginTop:20}}>
              <Text style={{fontSize:22,fontWeight:'700'}}>Estimated CO2 Saved </Text>
              <Text style={{fontSize:20}}></Text>

            </View>
           
          </View>
          <View style={{marginLeft:10 , marginTop:5 , flexDirection:'row'}}>
            <View><Image style={{width:60 ,height:60}} source={{uri:'https://cdn-icons-png.flaticon.com/128/188/188333.png'}}/></View>
            <View style={{marginTop:10}}><Text style={{fontSize:30}}>25g</Text></View>
         
          </View>

        </View>    

       </View></TouchableOpacity>


       <View style={{backgroundColor:'lightgrey' , width:1115 , height:5 , marginTop:30}}>

       </View>

       <View style={{marginLeft:'-2%'}}> 
       <TouchableOpacity>
       <View style={{flexDirection:'row' , marginTop:20}}>
        
        <View style={{marginTop:20 , marginLeft:25}}><Image  style={{width:25 , height:25}}source={{uri:'https://cdn-icons-png.flaticon.com/512/503/503849.png'}}/></View>
        <View style={{marginTop:20 , marginLeft:20}}>
          <Text style={{fontSize:21}}>Setings</Text>
        </View>

       </View></TouchableOpacity>


       <TouchableOpacity>
       <View style={{flexDirection:'row' ,marginTop:20}}>
        
        <View style={{marginTop:20 , marginLeft:25}}><Image  style={{width:25 , height:25}}source={{uri:'https://cdn-icons-png.flaticon.com/512/542/542689.png'}}/></View>
        <View style={{marginTop:20 , marginLeft:20}}>
          <Text style={{fontSize:21}}>Messages</Text>
        </View>

       </View></TouchableOpacity>

       <TouchableOpacity>
       <View style={{flexDirection:'row' ,marginTop:20}}>
        
        <View style={{marginTop:20 , marginLeft:25}}><Image  style={{width:25, height:25}}source={{uri:'https://cdn-icons-png.flaticon.com/128/1077/1077114.png'}}/></View>
        <View style={{marginTop:20 , marginLeft:20}}>
          <Text style={{fontSize:21}}>Manage CoRide Account</Text>
        </View>

       </View></TouchableOpacity>
       <TouchableOpacity
       onPress={()=>{navigation.navigate('Login')}}
       
      
       >
       <View style={{flexDirection:'row',marginTop:20}}>
        
        <View style={{marginTop:20 , marginLeft:25}}><Image  style={{width:25 , height:25}}source={{uri:'https://cdn-icons-png.flaticon.com/512/1828/1828479.png'}}/></View>
        <View style={{marginTop:20 , marginLeft:20}}>
          <Text style={{fontSize:21}}>Logout</Text>
        </View>

       </View></TouchableOpacity>
       </View>

       <View style={{marginLeft:20 , marginTop:35}}>
        <Text>v3.605.10000</Text>
       </View>
            <View style={{height:250}}></View>
       </ScrollView>
    </View>
    
    </SafeAreaView>
    
  );
}

