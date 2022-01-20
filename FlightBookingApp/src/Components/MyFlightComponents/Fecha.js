import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity as Button, Alert, ToastAndroid} from 'react-native'
import { styles } from './formStyles'
import {  FlightData, nextStep  } from '../../Assets/hooks/pikerHelper';
import { Calendar } from 'react-native-calendars'
import { MenuBar } from './MenuBar';
import { FlightCard } from '../FlightCard';

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

    /* i had to do this because the calendar date would return a single digit value 
       instead of something like "02" which we need to set the minimun date value
       also using "date => {`${date.year}..." wouldnt work as the data type the field
       minDate can only be a string and somehow returning a string like that isnt allowed */
    const getFullDate = () => {
        return (date.getMonth() < 10 ? (
            `${date.getFullYear()}-0${date.getMonth()+1 }-${date.getDate()}` //for some reason it returns the first month as 0,thus the +1
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
                        //the calendar would shift the whole content due to some months 
                        //not having the same amount of days thus being vertically shorter
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
            {/* <Button style={(selectedValue != "" ? (styles.button) : (styles.buttonDisabled))} onPress={() => nextStep(selectedValue, "Pasajeros", navigation, setSelectedValue, 'F')}>
                <Text style={styles.centerText}> Next </Text>
            </Button> */}
            <NextButton />
        </View> 
    )
}