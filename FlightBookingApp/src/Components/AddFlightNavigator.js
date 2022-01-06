import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {Origin1, Destination2, Date3, Passengers4, ConfirmationScreen} from 'BookingFlightScreens'

const Stack = createStackNavigator()

const AddFlightNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Origin1" component={Origin1}/>
            <Stack.Screen name="Destination2" component={Destination2}/>
            <Stack.Screen name="Date3" component={Date3}/>
            <Stack.Screen name="Passengers4" component={Passengers4}/>
            <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen}/>
        </Stack.Navigator>
    )
}

export default AddFlightNavigator
