import React, { useState } from 'react'
import { Text, View, TouchableOpacity as Button} from 'react-native'
import {NewFlightCard} from './NewFlightCard';
import { styles } from './formStyles'

export const Confirmacion = ({navigation}) =>{

    const FlightData = {
        "Destiny": ["Sjj", "Siraj"], 
        "Fecha": "today yes, 999", //use setState to get this data, then update the object and pass it
        "Origin": ["Smh", "something"], 
        "Passengers": "30", 
        "key": 0,
    }

    const goToScreen = () =>{
        navigation.navigate('My Flights')
    }    
    return (
        <View style={styles.screen}>
            {/**Origen */}
            <NewFlightCard props={FlightData}></NewFlightCard>
            <View style={styles.centerMainContent}>
                <Text style={styles.header}>Your request {'\n'}was recieved.</Text>
            </View>
            {/**have a boolean to decided the design of the input component in props */}
            <Button style={styles.button} onPress={goToScreen}>
                <Text style={styles.centerText}> Next </Text>
            </Button>

        </View> 
    )
}