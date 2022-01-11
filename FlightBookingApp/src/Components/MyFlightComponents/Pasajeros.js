
import React, { useState } from 'react'
import { Text, View } from 'react-native'


export const Pasajeros = ({navigation}) =>{
    
    return (
        <View>
            <Text>Pasajeros</Text>
            <Text  onPress={() => navigation.navigate('Confirmacion')}>aqui</Text>
        </View>
    )
}