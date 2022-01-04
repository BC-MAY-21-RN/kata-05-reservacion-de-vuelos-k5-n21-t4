//ESTE ARCHIVO ES DE PREUBA PARA PROBAR EL LOGIN

import React from 'react'
import { Text, View } from 'react-native'

export const flights = (props) => {
    
    const { route: { params: info_user } } = props

    return (
        <View>
            <Text>¡Vuelos!</Text>
        </View>
    )
}
