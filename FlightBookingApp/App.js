import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp, Login, MyFlights, Origen, Destino, Fecha, Pasajeros, Confirmacion} from './src/Screens/index';

const Stack = createNativeStackNavigator();

const App = () => {

  const stackOptions = {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: '#5974f5', 
    headerTitleStyle: {
      fontSize: 30, 
      fontWeight: 'bold',
      left: 0,
    }, 
    headerTitleAlign:'left',
  }
  const stackOptionsForm = {
    headerShown: false,
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: '#5974f5', 
    title: '',
  }

  return (
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={stackOptions}/>
          <Stack.Screen name="SignUp" component={SignUp} options={stackOptions}/>
          <Stack.Screen name="My Flights" component={MyFlights} options={stackOptions}/>
          <Stack.Screen name="Origen" component={Origen} options={stackOptionsForm}/>
          <Stack.Screen name='Destino' component={Destino} options={stackOptionsForm}/>
          <Stack.Screen name='Fecha' component={Fecha} options={stackOptionsForm}/>
          <Stack.Screen name='Pasajeros' component={Pasajeros} options={stackOptionsForm}/>
          <Stack.Screen name='Confirmacion' component={Confirmacion} options={stackOptionsForm}/>
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default App;
