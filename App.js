

import { NavigationContainer } from '@react-navigation/native';
import React from 'react'

    import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
    import TabNav from './Screens/TabNav';
    ;
   
    const Stack = createNativeStackNavigator();
    
    export default function App() {
      return (
        <NavigationContainer>
           
        <Stack.Navigator 
        initialRouteName='Tab'
        screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tab" component={TabNav} />
        </Stack.Navigator>
    
        </NavigationContainer>
        );
    }

    
