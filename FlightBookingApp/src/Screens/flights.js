//ESTE ARCHIVO ES DE PREUBA PARA PROBAR EL LOGIN

import React, { useState } from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Tarjetaprueba } from '../Components';

export const flights = (props) => {
    const [renderFlights, setFlights] = useState([])
    const [documents, setDocs] = useState([])
    const { route: { params: info_user } } = props

    console.log(info_user)
    const docFunct = async()=>{
        try{
            // ACA SE COLOCA LA VALIDACIÓN DE LOS VUELOS JAJA
            setDocs(await firestore().collection('Flights').get())

            //setDocs(await firestore().collection('Flights').doc('').get())  <========= se usa para obtener un documento en especifico
            
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