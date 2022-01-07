import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {
//   Origin1,
//   Destination2,
//   Date3,
//   Passengers4,
//   ConfirmationScreen,
// } from '../Screens/AddFlightFormScreens/BookingFlightScreens';
import Origin1 from '../Screens/AddFlightFormScreens/Origin1';
import Destination2 from '../Screens/AddFlightFormScreens/Destination2';
import Date3 from '../Screens/AddFlightFormScreens/Date3';
import Passengers4 from '../Screens/AddFlightFormScreens/Passengers4';
import ConfirmationScreen from '../Screens/AddFlightFormScreens/ConfirmationScreen';

const Stack = createNativeStackNavigator();

const AddFlightNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Origin1" component={Origin1} />
      <Stack.Screen name="Destination2" component={Destination2} />
      <Stack.Screen name="Date3" component={Date3} />
      <Stack.Screen name="Passengers4" component={Passengers4} />
      <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
    </Stack.Navigator>
  );
};

export default AddFlightNavigator;
