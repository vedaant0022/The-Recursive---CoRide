import { View, Text } from 'react-native'
import React from 'react'
import MapView,{Marker} from 'react-native-maps';
const App = () => {
  return (
    <MapView  style={{height:400}}
    // mapType='mutedStandard'
    initialRegion={{
      latitude:19.0596,
      longitude: 72.8295,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    }}
  />
  )
}
export default App