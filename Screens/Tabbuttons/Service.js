import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

const Service = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View>
        <View style={{marginTop:30,marginLeft:20}}>
        <Text style={{fontSize:37,fontWeight:'700'}}>CoRide</Text>
      </View> 
      <View style={{flexDirection:'row',alignSelf:'center',marginTop:50}}>
            <TouchableOpacity style={{borderWidth:0,width:'22%',padding:10,height:100,borderRadius:15,backgroundColor:'white',shadowColor:'#fff',shadowOpacity:0.5,shadowOffset:1}}>
              
                <Text style={{alignSelf:'center',fontSize:14,fontWeight:'600'}}>Trip</Text>
                 <Image style={{alignSelf:'center',marginTop:10}}
                 source={{uri:'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png',height:50,width:70}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth:0,width:'22%',padding:10,height:100,borderRadius:15,backgroundColor:'white',shadowColor:'#fff',shadowOpacity:0.5,shadowOffset:1,marginLeft:10}}>
              
                <Text style={{alignSelf:'center',fontSize:14,fontWeight:'600'}}>Inter-city</Text>
                 <Image style={{alignSelf:'center',marginTop:10}}
                 source={{uri:'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png',height:50,width:70}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth:0,width:'22%',padding:10,height:100,borderRadius:15,backgroundColor:'white',shadowColor:'#fff',shadowOpacity:0.5,shadowOffset:1,marginLeft:10}}>
              
                <Text style={{alignSelf:'center',fontSize:14,fontWeight:'600'}}>Rentals</Text>
                 <Image style={{alignSelf:'center',marginTop:10}}
                 source={{uri:'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png',height:50,width:70}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth:0,width:'22%',padding:10,height:100,borderRadius:15,backgroundColor:'white',shadowColor:'#fff',shadowOpacity:0.5,shadowOffset:1,marginLeft:10}}>
              
                <Text style={{alignSelf:'center',fontSize:12,fontWeight:'600'}}>Group ride</Text>
                 <Image style={{alignSelf:'center',marginTop:10}}
                 source={{uri:'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png',height:50,width:70}}/>
            </TouchableOpacity>
            
          </View>

           <ScrollView showsHorizontalScrollIndicator={false}
           horizontal>
           <TouchableOpacity style={{margin:15,marginTop:50}}>
          <View style={{borderWidth:0,height:140,width:320,backgroundColor:'orange',borderRadius:20,flexDirection:'row'}}>
            <View style={{flexDirection:'column'}}>
            <Text style={{fontSize:18,marginLeft:10,marginTop:10,color:'white',fontWeight:'700'}}>Ride on your terms</Text>
            <Text style={{color:'white',marginLeft:10,marginTop:60}}>Try CoRide Auto </Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image style={{marginTop:20,marginLeft:20}}
            source={{uri:'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1648432113/assets/6e/86fff4-a82a-49b9-8b0b-54b341ea0790/original/Uber_Auto_312x208_pixels_Mobile.png',height:90,width:90}}/></View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={{margin:20,marginTop:50}}>
          <View style={{borderWidth:0,height:140,width:320,backgroundColor:'green',borderRadius:20,flexDirection:'row'}}>
            <View style={{flexDirection:'column'}}>
            <Text style={{fontSize:18,marginLeft:10,marginTop:10,color:'white',fontWeight:'700'}}>Ride on your terms</Text>
            <Text style={{color:'white',marginLeft:10,marginTop:60}}>Try CoRide Auto </Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image style={{marginTop:20,marginLeft:20}}
            source={{uri:'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1648432113/assets/6e/86fff4-a82a-49b9-8b0b-54b341ea0790/original/Uber_Auto_312x208_pixels_Mobile.png',height:90,width:90}}/></View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={{margin:20,marginTop:50}}>
          <View style={{borderWidth:0,height:140,width:320,backgroundColor:'blue',borderRadius:20,flexDirection:'row'}}>
            <View style={{flexDirection:'column'}}>
            <Text style={{fontSize:18,marginLeft:10,marginTop:10,color:'white',fontWeight:'700'}}>Ride on your terms</Text>
            <Text style={{color:'white',marginLeft:10,marginTop:60}}>Try CoRide Auto </Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image style={{marginTop:20,marginLeft:20}}
            source={{uri:'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1648432113/assets/6e/86fff4-a82a-49b9-8b0b-54b341ea0790/original/Uber_Auto_312x208_pixels_Mobile.png',height:90,width:90}}/></View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={{margin:20,marginTop:50}}>
          <View style={{borderWidth:0,height:140,width:320,backgroundColor:'red',borderRadius:20,flexDirection:'row'}}>
            <View style={{flexDirection:'column'}}>
            <Text style={{fontSize:18,marginLeft:10,marginTop:10,color:'white',fontWeight:'700'}}>Ride on your terms</Text>
            <Text style={{color:'white',marginLeft:10,marginTop:60}}>Try CoRide Auto </Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image style={{marginTop:20,marginLeft:20}}
            source={{uri:'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1648432113/assets/6e/86fff4-a82a-49b9-8b0b-54b341ea0790/original/Uber_Auto_312x208_pixels_Mobile.png',height:90,width:90}}/></View>
          </View>
          </TouchableOpacity>
          </ScrollView>

          <View>
            <Text style={{fontWeight:'600',fontSize:20,marginLeft:10}}>Plan your next trip</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false}
          horizontal>
            <TouchableOpacity>
          <View>
            
            <Image style={{marginTop:20,marginLeft:10,borderRadius:20}}
            source={{uri:'https://img.freepik.com/premium-vector/car-with-luggage-travelling-highway_104785-336.jpg',height:150,width:250}}/>
            <Text style={{marginLeft:15,fontSize:16,fontWeight:'500',marginTop:10}}>Travel Inter-City </Text>
            <Text style={{color:'grey',marginLeft:15,marginTop:5}}>Get to remote locations with ease</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View>
            <Image style={{marginTop:20,marginLeft:15,borderRadius:20}}
            source={{uri:'https://www.sapphiresolutions.net/blog/wp-content/uploads/2023/03/Top-10-Car-Rental-App-%E2%80%93-1-1.png',height:150,width:250}}/>
            <Text style={{marginLeft:15,fontSize:16,fontWeight:'500',marginTop:10}}>Rentals </Text>
            <Text style={{color:'grey',marginLeft:15,marginTop:5}}>Travel from 1 to 12 hours</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View>
            <Image style={{marginTop:20,marginLeft:15,borderRadius:20}}
            source={{uri:'https://www.travelpayouts.com/blog/wp-content/uploads/2019/08/tp-blog-1864x980-1.jpg',height:150,width:250}}/>
            <Text style={{marginLeft:15,fontSize:16,fontWeight:'500',marginTop:10}}>Reserve and Relax </Text>
            <Text style={{color:'grey',marginLeft:15,marginTop:5}}>Book upto 90 days in advance</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View>
            <Image style={{marginTop:20,marginLeft:15,borderRadius:20}}
            source={{uri:'https://t3.ftcdn.net/jpg/02/74/18/74/360_F_274187435_m1hr1qz5chBbCccnd6iZpAMxmkLyTom6.jpg',height:150,width:250}}/>
            <Text style={{marginLeft:15,fontSize:16,fontWeight:'500',marginTop:10}}>For XL groups </Text>
            <Text style={{color:'grey',marginLeft:15,marginTop:5}}>Comfortable trips for your group</Text>
          </View>
          </TouchableOpacity>
          </ScrollView>

          <View style={{marginTop:30}}>
            <Text style={{fontWeight:'600',fontSize:20,marginLeft:10}}>Commute Smarter</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false}
          horizontal>
            <TouchableOpacity>
          <View>
            
            <Image style={{marginTop:20,marginLeft:10,borderRadius:20}}
            source={{uri:'https://cdn.dribbble.com/users/4693582/screenshots/16969011/media/68d5e199b631abef5069cd1b6902dda5.png',height:150,width:250}}/>
            <Text style={{marginLeft:15,fontSize:16,fontWeight:'500',marginTop:10}}>Go with CoRide Auto </Text>
            <Text style={{color:'grey',marginLeft:15,marginTop:5}}>Doorstep pick-up, No bargaining</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View>
            <Image style={{marginTop:20,marginLeft:15,borderRadius:20}}
            source={{uri:'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/k5c9st5ktts9dil551ei/Seoul%20-%20Everland%20Shuttle%20Bus%20by%20Daesung%20Tour.jpg',height:150,width:250}}/>
            <Text style={{marginLeft:15,fontSize:16,fontWeight:'500',marginTop:10}}>Hop on a Shuttle </Text>
            <Text style={{color:'grey',marginLeft:15,marginTop:5}}>Pre-book a seat, ride in comfort </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View>
            <Image style={{marginTop:20,marginLeft:15,borderRadius:20}}
            source={{uri:'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1691617897/assets/96/883301-6468-4492-bda1-1d988e965fed/original/Couple-with-plane-tickets.png',height:150,width:250}}/>
            <Text style={{marginLeft:15,fontSize:16,fontWeight:'500',marginTop:10}}>Try Group Trips </Text>
            <Text style={{color:'grey',marginLeft:15,marginTop:5}}>Take a trip with co-workers and save</Text>
          </View>
          </TouchableOpacity>
          
          </ScrollView>

          <View>
            <Text style={{fontWeight:'600',fontSize:20,marginLeft:10,marginTop:30}}>Save Everyday</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false}
          horizontal>
            <TouchableOpacity>
          <View>
            
            <Image style={{marginTop:20,marginLeft:10,borderRadius:20}}
            source={{uri:'https://live.staticflickr.com/7335/10264914274_08d161604e_b.jpg',height:150,width:250}}/>
            <Text style={{marginLeft:15,fontSize:16,fontWeight:'500',marginTop:10}}>Auto Rides </Text>
            <Text style={{color:'grey',marginLeft:15,marginTop:5}}>Upfront prices, doorstep pick-up</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View>
            <Image style={{marginTop:20,marginLeft:15,borderRadius:20}}
            source={{uri:'https://i.ytimg.com/vi/vlgAkt41GVk/maxresdefault.jpg',height:150,width:250}}/>
            <Text style={{marginLeft:15,fontSize:16,fontWeight:'500',marginTop:10}}>Shuttle rides </Text>
            <Text style={{color:'grey',marginLeft:15,marginTop:5}}>Premium Experiences</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View>
            <Image style={{marginTop:20,marginLeft:15,borderRadius:20}}
            source={{uri:'https://media.istockphoto.com/id/1296169452/vector/tourism-excursion-in-city-people-travel-group-near-tour-bus-vector-illustration-cartoon-trip.jpg?s=612x612&w=is&k=20&c=fw4ezdKIJt2rpfb7lnf8FdmoHVXGWS599fx3EvRiekE=',height:150,width:250}}/>
            <Text style={{marginLeft:15,fontSize:16,fontWeight:'500',marginTop:10}}>Try a group trip </Text>
            <Text style={{color:'grey',marginLeft:15,marginTop:5}}>Seamless trips together</Text>
          </View>
          </TouchableOpacity>
          <View style={{height:350}}>

          </View>
          
          </ScrollView>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Service