import React, { useState } from 'react'
import { Text, View, TouchableOpacity as Button} from 'react-native'
import {NewFlightCard} from './NewFlightCard';
import { styles } from './formStyles'
import {  FlightData  } from '../../Assets/hooks/pikerHelper'; 
import firestore from '@react-native-firebase/firestore'
import { MyFlights } from '../../Screens/MyFlights';
import { MenuBar } from './MenuBar';

export const Confirmacion = ({navigation}) =>{

    const renderFlightCard = () =>{
        return(<NewFlightCard props={FlightData}></NewFlightCard>)
    }

    const addFlight = () => {

        //tengo que subir el vuelo a la bd, pero ya que se suba tengo que traerme 
        //su id (el generrado) y ese meterlo al documento del usuario en el array
        ///aqui guarde el id del usuario 
        //FlightData.userId
        if (FlightData.Origin != "") {
            try{
                firestore()
                .collection('Flights')
                .add({
                    Destiny: [FlightData.Destiny[0], FlightData.Destiny[1]],
                    Fecha: FlightData.Fecha,
                    Origin: [FlightData.Origin[0], FlightData.Origin[1]],
                    Passengers: FlightData.Passengers
                }).then( (res) => {
                    console.log('Flight Booked -> ' + res.id)
                    addFlightToUser(res.id)
                })
            } catch (e){
                throw e
            }
        }
    }

    //not working will continue later
    const addFlightToUser = (flightId) => {
        try{
            firestore()
            .collection('Users')
            .doc(FlightData.userId)
            .update({
                flights: firestore.FieldValue.arrayUnion(flightId)
            }).then( () => {
                console.log( flightId + ' -> Flight Added to ->' + FlightData.userId)
            })
        } catch (e){
            console.log(e)
        }
    }
    
    //upload data to firebase under the corresponding user id
    const goToScreen = () =>{
        console.log(FlightData)
        addFlight()
        navigation.navigate('My Flights')
        //upload the flight data to the flights collection and get the generated id
        //add the id to the Users collection under the flights array
    }    

    //Next screen is My flights but i need to send the object to the bd as a new flight under the user account
    return (
        <View style={styles.screen}>
            <MenuBar backTo={"Pasajeros"} navigation={navigation} clearField={"Origin"} exit={false}/>
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