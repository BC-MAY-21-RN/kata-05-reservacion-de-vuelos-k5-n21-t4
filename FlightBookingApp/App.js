import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SignUp, Login} from './src/Screens/index';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>{ 
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='SignUp' component={SignUp}/>
    </Stack.Navigator>
  }</NavigationContainer>
  )
}

export default App;

