import React, { useState } from 'react'
import MapView,{Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const App = () => {
const[state, setState]=useState(
  {
    pickupcords:{
      latitude:19.3919,
      longitude:72.8397,
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
  <MapViewDirections
    origin={pickupcords}
    destination={droplocationcords}
    apikey={'AIzaSyBhc_wGha0x6Y01i-gG3nxVghGZQdZ5zUo'}
  />
    </MapView>  
  )
}
export default App