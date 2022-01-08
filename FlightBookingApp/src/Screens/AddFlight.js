import React from 'react'
import { View, Text } from 'react-native'

export const AddFlight = ({navigation}) => {
    return (
        <View>
            <Text onPress={() => navigation.navigate('Origen')}> yeh</Text>
        </View>
    )
};