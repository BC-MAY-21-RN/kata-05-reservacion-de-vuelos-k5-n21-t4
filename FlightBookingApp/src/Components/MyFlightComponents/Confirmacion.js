import React, { useState } from 'react'
import { Text, View } from 'react-native'


export const Confirmacion = ({navigation}) =>{
    
    return (
        <View>
            <Text>Confirmacion</Text>
            <Text  onPress={() => navigation.navigate('My Flights')}>aqui</Text>
        </View>
    )
}