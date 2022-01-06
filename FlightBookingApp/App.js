import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SignUp, Login, flights} from './src/Screens/index';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>{ 
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} options={{headerTintColor: '#5974f5',  headerTitleStyle: { fontWeight: 'bold' }}}/>
      <Stack.Screen name='SignUp' component={SignUp} options={{headerTintColor: '#5974f5',  headerTitleStyle: { fontWeight: 'bold' }}}/>
      <Stack.Screen name='Flights' component={flights} options={{headerTintColor: '#5974f5',  headerTitleStyle: { fontWeight: 'bold' }}}/>
    </Stack.Navigator>
  }</NavigationContainer>
  )
}

export default App;

