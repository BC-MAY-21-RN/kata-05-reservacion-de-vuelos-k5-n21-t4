
import React, { useState } from 'react'
import { Text, View } from 'react-native'


export const Origen = ({navigation}) =>{
    
    return (
        <View>
            <Text>Origen</Text>
            <Text  onPress={() => navigation.navigate('Destino')}>aqui</Text>
        </View>
    )
}