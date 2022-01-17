import React, { useState } from 'react'
import { Text, View, TouchableOpacity as Button} from 'react-native'
import {NewFlightCard} from './NewFlightCard';
import { styles } from './formStyles'
import FlightData from './Origen' //the object where the flight data is stored, it was declared in the origin component. 
import {firestore, firebase} from '@react-native-firebase/firestore'

export const Confirmacion = ({navigation}) =>{

    const renderFlightCard = () =>{
        return(<NewFlightCard props={FlightData}></NewFlightCard>)
    }

    // const addFlight = () => {

    //     if (FlightData.Origin != "") {

    //         let  fbTimeStamp = firebase.firestore.Timestamp.fromDate(new Date());
    //         firestore()
    //             .collection('Flights')
    //             .add({
    //                 Date: fbTimeStamp,
    //                 Destiny: [FlightData.Destiny[0], FlightData.Destiny[1]],
    //                 Origin: [FlightData.Origin[0], FlightData.Origin[1]],
    //                 Passengers: FlightData.Passengers
    //             }).then( () => {
    //                 console.log('Flight Booked')
    //             }) 
    //     }
    // }
    
    //upload data to firebase under the corresponding user id
    const goToScreen = () =>{
        console.log(FlightData)
        navigation.navigate('My Flights')
        
        //addFlight()
        
        //upload the flight data to the flights collection and get the generated id
        //add the id to the Users collection under the flights array
    }    

    //Next screen is My flights but i need to send the object to the bd as a new flight under the user account
    return (
        <View style={styles.screen}>
            {/**Origen */}
            {renderFlightCard()}
            <View style={styles.centerMainContent}>
                <Text style={styles.lowerHeader}>Your request {'\n'}was recieved.</Text>
            </View>
            {/**have a boolean to decided the design of the input component in props */}
            <Button style={styles.button} onPress={goToScreen}>
                <Text style={styles.centerText}> Confirm </Text>
            </Button>

        </View> 
    )
}