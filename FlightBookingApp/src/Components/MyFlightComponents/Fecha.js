
import React, { useState } from 'react'
import { Text, View, TouchableOpacity as Button} from 'react-native'
import { Input } from '../../Components/InputLog'
import {NewFlightCard} from './NewFlightCard';
import { styles } from './formStyles'

export const Fecha = ({navigation}) =>{

    const FlightData = {
        "Destiny": ["Sjj", "Siraj"], 
        "Fecha": "", //use setState to get this data, then update the object and pass it
        "Origin": ["Smh", "something"], 
        "Passengers": "", 
        "key": 0,
    }

    const goToScreen = () =>{
        navigation.navigate('Pasajeros')
    }    
    return (
        <View style={styles.screen}>
            {/**Origen */}
            <NewFlightCard props={FlightData}></NewFlightCard>
            <View style={styles.centerMainContent}>
                <Text style={styles.header}>Select date</Text>
                <Input style={styles.input} placeholder="Select Location"/>
            </View>
            {/**have a boolean to decided the design of the input component in props */}
            <Button style={styles.button} onPress={goToScreen}>
                <Text style={styles.centerText}> Next </Text>
            </Button>

        </View> 
    )
}