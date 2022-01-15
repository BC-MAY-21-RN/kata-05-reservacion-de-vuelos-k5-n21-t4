import React, { useState } from 'react'
import { Text, View, TouchableOpacity as Button} from 'react-native'
import {NewFlightCard} from './NewFlightCard';
import { styles } from './formStyles'
import FlightData from './Origen' //the object where the flight data is stored, it was declared in the origin component. 

export const Confirmacion = ({navigation}) =>{

    const renderFlightCard = () =>{
        return(<NewFlightCard props={FlightData}></NewFlightCard>)
    }

    const goToScreen = () =>{
        navigation.navigate('My Flights')
    }    

    //Next screen is My flights but i need to send the object to the bd as a new flight under the user account
    return (
        <View style={styles.screen}>
            {/**Origen */}
            {renderFlightCard()}
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