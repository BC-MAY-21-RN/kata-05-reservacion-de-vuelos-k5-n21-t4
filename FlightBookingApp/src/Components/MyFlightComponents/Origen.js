
import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity as Button} from 'react-native'
import { Input } from '../InputLog'
import {Texto} from '../../Assets/styled';
import {NewFlightCard} from './NewFlightCard';
import { CardFlight } from '../CardFlight';

export const Origen = ({navigation}) =>{

    const FlightData = {
        "Destiny": ["", ""],
        "Fecha": "", 
        "Origin": ["", ""], //use setState to get this data, then update the object and pass it
        "Passengers": "", 
        "key": 0,
    }

    const goToScreen = () =>{
        navigation.navigate('Destino')
    }    
    return (
        <View style={styles.screen}>
            {/**Origen */}
            <View style={styles.centerMainContent}>
                <Text style={styles.header}>Where are you{'\n'}now?</Text>
                <Input style={styles.input} placeholder="Select Location"/>
            </View>
            {/**have a boolean to decided the design of the input component in props */}
            <Button style={styles.button} onPress={goToScreen}>
                <Text style={styles.centerText}> Next </Text>
            </Button>

        </View> 
    )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: 'white',
        height: '100%',
        padding: 20,
        paddingTop: 0,
        flex: 1,
        justifyContent: 'center',
    },
    centerMainContent:{
        marginBottom: 220,
    },
    header:{
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 90,
    },
    button:{
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        bottom: 60,
        padding: 12,
        borderRadius: 15,
        flex: 1,
        width: '100%',
        backgroundColor: '#5C6EF8',
    },
    centerText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
  });