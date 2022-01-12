import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity as Button} from 'react-native'
import {NewFlightCard} from './NewFlightCard';
import { CardFlight } from '../CardFlight';

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
        marginBottom: 0,
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

  /**
   * justify-content: center;
  align-items: center;
  border-radius: 18px;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.BackColor || props.bcolor};
  margin: 2% 0% 2% 0%;
  padding: 3px;
  font-weight: bold;
   */
