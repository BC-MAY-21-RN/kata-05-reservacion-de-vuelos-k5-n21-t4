
import React, { useState } from 'react'
import { Text, View } from 'react-native'


export const Destino = ({navigation}) =>{
    
    return (
        <View>
            <Text>Destino</Text>
            <Text  onPress={() => navigation.navigate('Fecha')}>aqui</Text>
        </View>
    )
}