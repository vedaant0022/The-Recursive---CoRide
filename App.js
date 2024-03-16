

import { NavigationContainer } from '@react-navigation/native';
import React from 'react'

    import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
    import TabNav from './Screens/TabNav';
    import Start from './Screens/Start';
    import Signup from './Screens/Signup';
    import Login from './Screens/Login';
    ;
   
    const Stack = createNativeStackNavigator();
    
    export default function App() {
      return (
        <NavigationContainer>
           
        <Stack.Navigator 
        initialRouteName='Tab'
        screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tab" component={TabNav} />
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    
        </NavigationContainer>
        );
    }

    
