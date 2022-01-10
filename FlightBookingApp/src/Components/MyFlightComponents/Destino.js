import React, { useState } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { Input } from '../InputLog'
import {TochOP} from '../../Assets/styled'
import CardFlight from '../CardFlight/CardFlight'

export const Destino = ({navigation}) =>{

    const [location, setLocation] = useState("")

    const flightInfo = {
        Origen: ["Mex","Canada"],
        Destino: [ "Ca", "Yeh", ],
        Fecha: "mañana",
        Passengers: "20",
    }
    
    return (
        <View style={styles.screen}>
            {/**Destino */}

            {/**here ill have to update the component everytime i enter the screen with the object */}
            {/* <CardFlight
                orAirport={flightInfo.Origen[0]}
                destAirport={flightInfo.Origen[1]}
                ctryOrigin={flightInfo.Destino[0]}
                ctryDestination={flightInfo.Destino[1]}
                fecha={flightInfo.Fecha}
                passengers={flightInfo.Passengers}
            /> */}

            <Text style={styles.header}>Where will you be{'\n'}flying to?</Text>
            <Input style={styles.input} placeholder="Select Location" value={location}/>
            {/**Select location */}
            {/**Next button */}

            <TochOP onPress={() => navigation.navigate('Fecha')}>
                <Text size={'18px'} color={'white'} FW={'bold'}> Next </Text>
            </TochOP>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: 'white',
        height: '100%',
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    },
    header:{
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 80,
    },

  });