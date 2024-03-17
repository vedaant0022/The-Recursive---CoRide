import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Image} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
    <View >
      <View style={{marginTop:100}}>
        <Image style={{width:250, height:250,alignSelf:'center'}} 
        source={{uri:'https://cdn-icons-png.flaticon.com/512/3782/3782086.png'}}
        
        />
        
      </View>
    </View>
    <View style={{marginTop:20}}>
      <Text style={{fontSize:25, fontWeight:'bold',textAlign:'center'}}>We have no rewards for you</Text>
      <Text style={{fontSize:25, fontWeight:'bold',textAlign:'center'}}>Yet! </Text>
      <Text style={{fontWeight:'500', color:'grey',marginTop:15 , fontSize:16,textAlign:'center'}}> Pay your next dining bill with Zomato Pay</Text>
      <Text style={{fontWeight:'500', color:'grey',marginTop:10 , fontSize:16,textAlign:'center'}}>and get up to 100% cashback </Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
