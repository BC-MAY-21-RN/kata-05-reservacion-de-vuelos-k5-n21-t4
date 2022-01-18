import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { firestore } from '@react-native-firebas/firestore'

const ActivityMonitor = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        const subscriber = firestore()
            .collection('Flights')
            .onSnapshot(querySnapshot => {
                const flighst = []
                querySnapshot.forEach(documentSnapshot => {
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    })
                })
                setData(flighst)
                setLoading(false)
            })
        return () => subscriber()
    }, [])


    if (loading) {
        return (<ActivityIndicator />)
    }
}

export default ActivityMonitor
