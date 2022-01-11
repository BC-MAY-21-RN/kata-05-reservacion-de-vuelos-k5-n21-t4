import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {SignUp, Login, MyFlights, AddFlight} from '../Screens/index';

import { Origen, Confirmacion, Destino, Fecha,Pasajeros } from './MyFlightComponents/Index'


const Stack = createNativeStackNavigator();

export function StackScreen(){
    return(
        <NavigationContainer>{ 
            <Stack.Navigator>
              <Stack.Screen name='Login' component={Login} options={{headerTintColor: '#5974f5', headerTitleStyle:{fontSize: 30, fontWeight: 'bold',}, headerTitleAlign:'left'}}/>
              <Stack.Screen name='SignUp' component={SignUp} options={{headerTintColor: '#5974f5',  headerTitleStyle:{fontSize: 30, fontWeight: 'bold',}, headerTitleAlign:'left'}}/>
              <Stack.Screen name='My Flights' component={MyFlights} options={{headerTintColor: '#5974f5', headerTitleStyle:{fontSize: 30, fontWeight: 'bold',}, headerTitleAlign:'left'}}/>
              <Stack.Screen name='Add Flight' component={AddFlight} options={{headerTintColor: '#5974f5', headerTitleStyle:{fontSize: 30, fontWeight: 'bold',}, headerTitleAlign:'left'}}/>
              <Stack.Screen name='Origen' component={Origen} options={{headerTintColor: '#5974f5', headerTitleStyle:{fontSize: 30, fontWeight: 'bold',}, headerTitleAlign:'left'}}/>
              <Stack.Screen name='Confirmacion' component={Confirmacion} options={{headerTintColor: '#5974f5', headerTitleStyle:{fontSize: 30, fontWeight: 'bold',}, headerTitleAlign:'left'}}/>
              <Stack.Screen name='Destino' component={Destino} options={{headerTintColor: '#5974f5', headerTitleStyle:{fontSize: 30, fontWeight: 'bold',}, headerTitleAlign:'left'}}/>
              <Stack.Screen name='Fecha' component={Fecha} options={{headerTintColor: '#5974f5', headerTitleStyle:{fontSize: 30, fontWeight: 'bold',}, headerTitleAlign:'left'}}/>
              <Stack.Screen name='Pasajeros' component={Pasajeros} options={{headerTintColor: '#5974f5', headerTitleStyle:{fontSize: 30, fontWeight: 'bold',}, headerTitleAlign:'left'}}/>
            </Stack.Navigator>
          }</NavigationContainer>
    );
}