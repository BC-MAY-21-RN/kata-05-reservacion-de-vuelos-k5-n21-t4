//ESTE ARCHIVO ES DE PREUBA PARA PROBAR EL LOGIN

import React, { useState } from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Tarjetaprueba } from '../Components';

export const flights = (props) => {
    
    const { route: { params: info_user } } = props

    const [info, setInfo] = useState([]);
    const [renderFlights, setFlights] = useState([])
    const [documents, setDocs] = useState([])

    const docFunct = async()=>{
        try{
            setDocs(await firestore().collection('Flights').get())

            setFlights( documents._docs.map((doc, index) => {
                    return <Tarjetaprueba key={`InfoKey-${index}`} info={doc._data} />;
                })
            )
        }
        catch(e){
            console.log(e)
        }
    }
    docFunct()
    return (
        <View>
            <Text>¡Vuelos!</Text>
            <Text>{renderFlights}</Text>
        </View>
    )
}