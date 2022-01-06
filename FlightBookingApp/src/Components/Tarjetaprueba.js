import React from 'react'
import { Text } from 'react-native'

export const Tarjetaprueba = (props) => {
    return (
        <Text>
            {JSON.stringify(props.info)}
        </Text>
    )
}
