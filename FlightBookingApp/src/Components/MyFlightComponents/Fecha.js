import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity as Button, Alert, ToastAndroid} from 'react-native'
import { styles } from './formStyles'
import {  FlightData  } from '../../Assets/hooks/FlightData';
import { Calendar } from 'react-native-calendars'
import { MenuBar } from './MenuBar';
import { FlightCard } from '../FlightCard';
import { NextButton } from './NextButton'

export const Fecha = ({navigation}) =>{
    const renderFlightCard = () =>{
        return(<FlightCard props={FlightData}></FlightCard>)
    }

    const [selectedValue, setSelectedValue] = useState("")
    const date = new Date()

    const nToMonth = (nMonth) => {
        const months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ]
           
        return months[nMonth-1]
    }

    const getFullDate = () => {
        return (date.getMonth() < 10 ? (
            `${date.getFullYear()}-0${date.getMonth()+1 }-${date.getDate()}`
        ) : (
            `${date.getFullYear()}-${date.getMonth()+1 }-${date.getDate()}`
        ))
    }
    
    useEffect(() => {
        selectedValue != "" ? dateConfirmation() : null
    }, [selectedValue])

    const dateConfirmation = () => {
        Alert.alert("Book flight for",`${selectedValue}\nis this correct?`,[{text: "Cancel"},{ text: "OK"}])
    }
     

    //Next screen Pasajeros
    return (
        <View style={styles.screen}>
            <MenuBar backTo={"Destino"} navigation={navigation} clearField={"Origin"} type={'Back'} exit={false}/>
            {renderFlightCard()}
            <View style={styles.centerCalendarContent}>
                <Text style={styles.lowerHeader}>Select date</Text>
                <Calendar 
                    style={{
                        height: 320 
                    }}
                    minDate={getFullDate()}
                    futureScrollRange={10}
                    pastScrollRange={0}
                    hideDayNames={true}
                    allowSelectionOutOfRange={false}
                    onDayPress={date => {
                        setSelectedValue(`${date.day}/ ${nToMonth(date.month)} / ${date.year}`) 
                      }}
                    theme={{
                        selectedDayBackgroundColor: '#ffffff',
                        selectedDayTextColor: '#ffffff',
                    }}
                />
            </View>
            <NextButton value={selectedValue} nextScreen={'Pasajeros'} id={'Fecha'} navigation={navigation}/>
        </View> 
    )
}