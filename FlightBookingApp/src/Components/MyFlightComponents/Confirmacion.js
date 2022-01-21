import React from 'react'
import { Text, View, TouchableOpacity as Button} from 'react-native'
import {FlightCard} from '../FlightCard'
import { styles } from './formStyles'
import { FlightData } from '../../Assets/hooks/FlightData'
import firestore from '@react-native-firebase/firestore'
import { MenuBar } from './MenuBar'
import { clearFlightCardData } from '../../Assets/hooks/pikerHelper'

export const Confirmacion = ({navigation}) =>{
    const renderFlightCard = () =>{
        return(<FlightCard props={FlightData}></FlightCard>)
    }

    const addFlight = () => {
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
    
    const goToScreen = () =>{
        addFlight()
        navigation.navigate('My Flights')
        clearFlightCardData()
    }    

    return (
        <View style={styles.screen}>
            <MenuBar backTo={"Pasajeros"} navigation={navigation} clearField={"Origin"} exit={false}/>
            {renderFlightCard()}
            <View style={styles.centerMainContent}>
                <Text style={styles.lowerHeader}>Your request {'\n'}was recieved.</Text>
            </View>
            <Button style={styles.button} onPress={goToScreen}>
                <Text style={styles.centerText}> Confirm </Text>
            </Button>
        </View> 
    )
}