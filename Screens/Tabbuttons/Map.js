import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MapView,{Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const App = () => {
const[state,setState]=useState(
  {
    pickupcords:{
      latitude:19.1977,
      longitude:72.8273,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationcords:{
      latitude:19.1874,
      longitude:72.8484,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  })


const { pickupcords, droplocationcords }= state
  return (
    <MapView  style={{height:400}}
 
    initialRegion={pickupcords}>
  <Marker
    coordinate={{
     latitude: 19.1874,
     longitude: 72.8484,
    }}
    title="Your location"
    description='customer'
    pinColor='red'
    identifier='origin'
    />
  
    </MapView>  
  )
}
export default App