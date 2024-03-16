import { View, Text, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [owner,setowner] = useState("");
  const [model,setmodel] = useState("");
  const [rc,setrc] = useState("");
  const [contact,setcontact] = useState("");
  const [photo,setphoto] = useState("");
  const [start,setstart] = useState("");
  const [end,setend] = useState("");

  const addride = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "OwnerName": owner,
      "Model": model,
      "Numberplate": rc,
      "Contact": contact,
      "photo": photo,
      "start": start,
      "end": end
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://1d7b-182-74-22-86.ngrok-free.app/rides", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
      
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={{alignSelf:'center',}}>
            <Text style={{fontSize:24,fontWeight:'800',marginTop:'15%'}}>Add Your Vehicle</Text>
          </View>

          {/* Form Starts */}
          <View style={{marginBottom:'20%'}}>
        <View style={{marginTop:'10%',marginLeft:'10%',marginRight:'10%',borderWidth:1,width:330,height:'7.5%',alignSelf:'center',borderRadius:10}}>
          <View style={{flexDirection:'row'}}>
            <View>
            
            <TextInput
            placeholder='Enter Name of Owner'
            style={{color:'#000000',paddingStart:12,paddingTop:12,width:280}}
            value={owner}
            onChangeText={setowner}
            />
            </View>
            <View style={{top:5}}>
            <Image
            source={{uri:'https://cdn-icons-png.flaticon.com/512/2202/2202112.png'}}
            style={{height:35,width:35}}
            />
            </View>
          </View>
        </View>

        {/* Model */}
        <View style={{marginTop:'5%',marginLeft:'10%',marginRight:'10%',borderWidth:1,width:330,height:'7.5%',alignSelf:'center',borderRadius:10}}>
          <View style={{flexDirection:'row'}}>
            <View>
            
            <TextInput
            placeholder='Enter Vehicle Model'
            style={{color:'#000000',paddingStart:12,paddingTop:12,width:280}}
            value={model}
            onChangeText={setmodel}
            />
            </View>
            <View style={{top:5}}>
            <Image
            source={{uri:'https://cdn-icons-png.flaticon.com/512/741/741407.png'}}
            style={{height:35,width:35}}
            />
            </View>
          </View>
        </View>

        {/* Numberplate */}
        <View style={{marginTop:'5%',marginLeft:'10%',marginRight:'10%',borderWidth:1,width:330,height:'7.5%',alignSelf:'center',borderRadius:10}}>
          <View style={{flexDirection:'row'}}>
            <View>
            
            <TextInput
            placeholder='Enter RC number'
            style={{color:'#000000',paddingStart:12,paddingTop:12,width:280}}
            value={rc}
            onChangeText={setrc}
            />
            </View>
            <View style={{top:5}}>
            <Image
            source={{uri:'https://cdn-icons-png.flaticon.com/512/6903/6903840.png'}}
            style={{height:35,width:35}}
            />
            </View>
          </View>
        </View>
        {/* Contact */}
        <View style={{marginTop:'5%',marginLeft:'10%',marginRight:'10%',borderWidth:1,width:330,height:'7.5%',alignSelf:'center',borderRadius:10}}>
          <View style={{flexDirection:'row'}}>
            <View>
            
            <TextInput
            placeholder='Enter Contact Number'
            style={{color:'#000000',paddingStart:12,paddingTop:12,width:280}}
            value={contact}
            onChangeText={setcontact}
            />
            </View>
            <View style={{top:5}}>
            <Image
            source={{uri:'https://cdn-icons-png.flaticon.com/512/552/552489.png'}}
            style={{height:35,width:35}}
            />
            </View>
          </View>
        </View>
        {/* photo */}
        <View style={{marginTop:'5%',marginLeft:'10%',marginRight:'10%',borderWidth:1,width:330,height:'7.5%',alignSelf:'center',borderRadius:10}}>
          <View style={{flexDirection:'row'}}>
            <View>
            
            <TextInput
            placeholder='Enter Vehicle Photo'
            style={{color:'#000000',paddingStart:12,paddingTop:12,width:280}}
            value={photo}
            onChangeText={setphoto}
            />
            </View>
            <View style={{top:5}}>
            <Image
            source={{uri:'https://cdn-icons-png.flaticon.com/512/3418/3418139.png'}}
            style={{height:35,width:35}}
            />
            </View>
          </View>
        </View>
        {/* Start */}
        <View style={{marginTop:'5%',marginLeft:'10%',marginRight:'10%',borderWidth:1,width:330,height:'7.5%',alignSelf:'center',borderRadius:10}}>
          <View style={{flexDirection:'row'}}>
            <View>
            
            <TextInput
            placeholder='Enter Start Destination'
            style={{color:'#000000',paddingStart:12,paddingTop:12,width:280}}
            value={start}
            onChangeText={setstart}
            />
            </View>
            <View style={{top:5}}>
            <Image
            source={{uri:'https://cdn-icons-png.flaticon.com/512/854/854945.png'}}
            style={{height:35,width:35}}
            />
            </View>
          </View>
        </View>
        {/* end */}
        <View style={{marginTop:'5%',marginLeft:'10%',marginRight:'10%',borderWidth:1,width:330,height:'7.5%',alignSelf:'center',borderRadius:10}}>
          <View style={{flexDirection:'row'}}>
            <View>
            
            <TextInput
            placeholder='Enter Final Destination'
            style={{color:'#000000',paddingStart:12,paddingTop:12,width:280}}
            value={end}
            onChangeText={setend}
            />
            </View>
            <View style={{top:5}}>
            <Image
            source={{uri:'https://cdn-icons-png.flaticon.com/512/5178/5178089.png'}}
            style={{height:35,width:35}}
            />
            </View>


          </View>
        </View>

        <View style={{alignItems:'center',marginTop:'13%',}}>
          <TouchableOpacity 
          onPress={()=>{addride()}}
          style={{borderWidth:0.5,width:130,height:40,backgroundColor:'#3efe8d',borderColor:'#3efe8d',borderRadius:12,elevation:10,shadowColor:'#000000'}}>
            <Text style={{fontSize:21,fontWeight:'700',textAlign:'center',paddingTop:5}}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App