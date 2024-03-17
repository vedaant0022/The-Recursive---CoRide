import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Tabbuttons/Home';
import Ride from './Tabbuttons/Ride';
import User from './Tabbuttons/User';
import Rewards from './Tabbuttons/Rewards';
import Service from './Tabbuttons/Service';



const TabNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer
    independent={true}
    >
      <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:'red',
            tabBarInactiveTintColor:'grey',tabBarShowLabel:false,
            tabBarLabelPosition:'below-icon',
            tabBarHideOnKeyboard:false,
            tabBarStyle:{position:'absolute',
                    bottom:0.1,
                    borderRadius:4,
                    elevation:10,
                    height:'12%',
                    left:3,
                    right:3}
                  }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({focused})=> (
            <View style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/846/846551.png'}}
              style={{height:25,width:25,tintColor: focused ? '#000000':'grey'}}
              />
              <Text style={{fontWeight:'400',color: focused ? '#000000':'grey'}}>Home</Text>
            </View>
          )
        }} />

        <Tab.Screen name="Service" component={Service} options={{
          tabBarIcon: ({focused})=> (
            <View style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/3/3467.png'}}
              style={{height:25,width:25,tintColor: focused ? '#000000':'grey'}}
              />
              <Text style={{fontWeight:'400',color: focused ? '#000000':'grey'}}>Service</Text>

            </View>
          )
        }} />


        <Tab.Screen name="Ride" component={Ride}  options={{
          tabBarIcon: ({focused})=> (
            <View style={{alignItems:'center',top:-25}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/3416/3416075.png'}}
              style={{height:60,width:60,tintColor:'#000000',backgroundColor:'#fff',borderRadius:50}}
              />
              <Text style={{fontWeight:'400',color: focused ? '#000000':'grey'}}>Add Ride</Text>
            </View>
          ) 
        }}/> 

        <Tab.Screen name="Rewards" component={Rewards} options={{
          tabBarIcon: ({focused})=> (
            <View  style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/721/721550.png'}}
              style={{height:25,width:25,tintColor: focused ? '#000000':'grey'}}
              />
              <Text style={{fontWeight:'400',color: focused ? '#000000':'grey'}}>Rewards</Text>
            </View>
          ) 
        }} />


        <Tab.Screen name="User" component={User} options={{
          tabBarIcon: ({focused})=> (
            <View  style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'}}
              style={{height:25,width:25,tintColor: focused ? '#000000':'grey'}}
              />
              <Text style={{fontWeight:'400',color: focused ? '#000000':'grey'}}>User</Text>
            </View>
          ) 
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default TabNav