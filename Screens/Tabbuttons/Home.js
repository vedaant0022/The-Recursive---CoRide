import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput,TouchableOpacity, ScrollView, ImageBackground, ActivityIndicator, FlatList } from 'react-native';
import Map from './Map';
import { useEffect, useState } from 'react';

export default function App() {

  const[names,setnames] = useState("");
  const[error,seterror] = useState(null);
  const[Userinput,setUserinput] = useState("");

  const filterdata = (item) => {
    if(Userinput === ""){
        return(
          <View style={{ marginLeft:'3%',flexDirection: 'row',top:20}}>
          <TouchableOpacity>
            <View style={{marginBottom:1}}>
            <View style={{ borderWidth: 1, height: 160, width: 360, paddingLeft: 20, paddingTop: 5, backgroundColor: '#fff', borderRadius: 13, borderColor: '#fff' }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: {item?.OwnerName}</Text>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Model: {item?.Model}</Text>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>RC No: {item?.Numberplate}</Text>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Contact: {item?.Contact}</Text>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Start: {item?.start}</Text>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>End: {item?.end}</Text>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Fare: {item?.fare}</Text>
            </View>
            </View>
            </TouchableOpacity>
            <View>
              <Image
                source={{ uri: item?.photo }}
                style={{ height: 100, width: 100, right: 115, top: 25 }} />
            </View>
             
        </View>
        );}

        if (item && item.end && Userinput && item.end.toLowerCase().includes(Userinput.toLowerCase())) {
          return (
            <View style={{ marginLeft:'3%',flexDirection: 'row',top:15 ,marginBottom:20}}>
            <TouchableOpacity>
              <View style={{marginBottom:1}}>
              <View style={{ borderWidth: 1, height: 160, width: 360, paddingLeft: 20, paddingTop: 5, backgroundColor: '#fff', borderRadius: 13, borderColor: '#fff',marginBottom:23 }}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: {item?.OwnerName}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Model: {item?.Model}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>RC No: {item?.Numberplate}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Contact: {item?.Contact}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Start: {item?.start}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>End: {item?.end}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Fare: {item?.fare}</Text>
              </View>
              </View>
              </TouchableOpacity>
              <View>
                <Image
                  source={{ uri: item?.photo }}
                  style={{ height: 100, width: 100, right: 115, top: 25 }} />
              </View>
               
          </View>
          );
      }
  };

  const list = () => {
    //Fetch URL and check log.console
    const URL= "https://1d7b-182-74-22-86.ngrok-free.app/listride";
    fetch(URL)
    .then((res)=>{
        if (!res.ok) {
            throw new Error("Something Went Wrong")
        }
            return res.json();
    })
    .then((data)=>{
      setnames(data);
      console.log(data);
    })
    .catch((error)=>{
        seterror(error.message);
        console.log(error.message)
    })
    
  };
  // check effect
  useEffect(()=>{
    list();
  },[]);

  return (
    
    <>
    
    <View>
      <Map/>
      </View>
      
      <View style={{}}>
      <View style={{display:'flex',flexDirection:'row',backgroundColor:'white',width:'95%',height:50,alignSelf:'center',marginTop:20,borderRadius:15,padding:10,}}>
        <TextInput
        placeholderTextColor={'black'}
        placeholder='Enter Your Drop-off Location'
        onChangeText={(text) => setUserinput(text)}
        style={{padding:2,width:'75%',fontSize:18,fontWeight:'700',paddingLeft:15}}/> 
      </View>
      </View>
      <FlatList data={names}
      renderItem={({ item,index }) => 
        filterdata(item)
     } 
      ItemSeparatorComponent={()=><View style={{backgroundColor:'offwhite',height:10}}></View>}
      />
      
      </> 
      
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top:'5%'
    
  },
  lineStyle:{
    borderWidth: 1,
    borderColor:'#F1EFEF',
    marginLeft:60,
    marginTop:10
        
  }
});