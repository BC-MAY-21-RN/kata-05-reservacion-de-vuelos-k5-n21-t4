import React, { useState } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { Input } from '../InputLog'
import {TochOP} from '../../Assets/styled';

export const Origen = ({navigation}) =>{

    const [location, setLocation] = useState("")
    
    return (
        <View style={styles.screen}>
            {/**Origen */}
            <Text style={styles.header}>Where are you{'\n'}now?</Text>
            <Input style={styles.input} placeholder="Select Location" value={location}/>
            
            {/**have a boolean to decided the design of the input component in props */}
            <TochOP onPress={() => navigation.navigate('Destino')}>
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