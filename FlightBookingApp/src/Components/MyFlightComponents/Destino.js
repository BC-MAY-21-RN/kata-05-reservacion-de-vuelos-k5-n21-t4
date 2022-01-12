
import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity as Button} from 'react-native'
import { Input } from '../../Components/InputLog'
import {Texto} from '../../Assets/styled';
import {NewFlightCard} from './NewFlightCard';
import { CardFlight } from '../CardFlight';

export const Destino = ({navigation}) =>{

    const FlightData = {
        "Destiny": ["", ""], //use setState to get this data, then update the object and pass it
        "Fecha": "", 
        "Origin": ["Smh", "something"], 
        "Passengers": "", 
        "key": 0,
    }

    const goToScreen = () =>{
        navigation.navigate('Fecha')
    }    
    return (
        <View style={styles.screen}>
            {/**Origen */}
            <NewFlightCard props={FlightData}></NewFlightCard>
            <View style={styles.centerMainContent}>
                <Text style={styles.header}>Where will you be{'\n'}flying to?</Text>
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