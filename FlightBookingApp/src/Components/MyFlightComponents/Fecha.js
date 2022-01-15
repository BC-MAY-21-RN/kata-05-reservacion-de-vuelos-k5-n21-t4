import React, { useState } from 'react'
import { Text, View, TouchableOpacity as Button} from 'react-native'
import { Input } from '../../Components/InputLog'
import {NewFlightCard} from './NewFlightCard';
import { styles } from './formStyles'
import FlightData from './Origen';
import { Calendar, Day } from 'react-native-calendars'
import { getCalendarDateString } from 'react-native-calendars/src/services';

export const Fecha = ({navigation}) =>{

    const [selectedValue, setSelectedValue] = useState("")
    const date = new Date()

    const nToMonth = (nMonth) => {
        const months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
        return months[nMonth]
    }


    const getFullDate = () => {
        return (date.getMonth() < 10 ? (
            `${date.getFullYear()}-0${date.getMonth() +1 }-${date.getDate()}`
        ) : (
            `${date.getFullYear()}-${date.getMonth() +1 }-${date.getDate()}`
        ))
    }
    
    const setObjectValue = (value) =>{
        setSelectedValue(value)
        FlightData.Fecha = value
    }
    
    const goToScreen = (nextScreen) =>{
        if (selectedValue != "") {
            navigation.navigate(nextScreen)
        }else{
            ToastAndroid.show("Select a valid option",ToastAndroid.LONG)
        }
    }    
    
    const nextStep = (pickerValue, nextScreen) =>{
        setObjectValue(pickerValue)
        goToScreen(nextScreen)
        console.log(FlightData)
    } 

    //Next screen Pasajeros

    return (
        <View style={styles.screen}>
            <NewFlightCard props={FlightData}></NewFlightCard>
            <View style={styles.centerCalendarContent}>
                <Text style={styles.headerCalendar}>Select date</Text>
                <Calendar 
                    style={{
                        //the calendar would shift the whole content due to some months 
                        //not having the same amount of days thus being vertically shorter
                        height: 320 
                    }}
                    futureScrollRange={10}
                    pastScrollRange={0}
                    hideDayNames={true}
                    allowSelectionOutOfRange={false}
                    minDate={getFullDate()}
                    onDayPress={date => {
                        setSelectedValue(`${nToMonth(date.month)} ${date.day}, ${date.year}`)
                      }}
                    theme={{
                        selectedDayBackgroundColor: '#ffffff',
                        selectedDayTextColor: '#ffffff',
                    }}
                />
            </View>
            <Button style={(selectedValue != "" ? (styles.button) : (styles.buttonDisabled))} onPress={() => nextStep(selectedValue, "Pasajeros")}>
                <Text style={styles.centerText}> Next </Text>
            </Button>

        </View> 
    )
}