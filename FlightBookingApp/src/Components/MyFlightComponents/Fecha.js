
import React, { useState } from 'react'
import { Text, View } from 'react-native'


export const Fecha = ({navigation}) =>{
    
    return (
        <View>
            <Text>Fecha</Text>
            <Text  onPress={() => navigation.navigate('Pasajeros')}>aqui</Text>
        </View>
    )
}