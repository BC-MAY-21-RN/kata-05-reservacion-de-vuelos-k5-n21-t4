
import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity as Button, ToastAndroid} from 'react-native'
import {NewFlightCard} from './NewFlightCard';
import { Picker } from '@react-native-picker/picker'
import { styles } from './formStyles'
import FlightData from './Origen' //the object where the flight data is stored, it was declared in the origin component. 

export const Destino = ({navigation}) =>{

    const [selectedValue, setSelectedValue] = useState("")

    //whenever the user wants to go back to make a change the component has to be rerendeered t
    //hats why i have this function here, so each time the screen is in view the flightcard will re-render
    const renderFlightCard = () =>{
        return(<NewFlightCard props={FlightData}></NewFlightCard>)
    }
    
    const setObjectValue = (value) =>{
        let Country = value.split(',')
            Country.shift()
            Country = Country.join(',')

            setSelectedValue(value)
            FlightData.Destiny[0] = value.slice(0, 3).toUpperCase() //get the first 3 letters of the country
            FlightData.Destiny[1] = Country
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
    }  

    //Next screen Fecha

    return (
        <View style={styles.screen}>
            {/**Origen */}
            {renderFlightCard()}
            <View style={styles.centerMainContent}>
                <Text style={styles.header}>Where will you be{'\n'}flying to?</Text>
                <View style={(selectedValue != "" ? (styles.input) : (styles.inputDisabled))}>
                    <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        {/**The last ono will be the default value */}
                        <Picker.Item label="Select Location" value=""></Picker.Item> 
                        <Picker.Item label="Serbia, Belgrade" value="Serbia, Belgrade"></Picker.Item>
                        <Picker.Item label="Germany, Berlin" value="Germany, Berlin"></Picker.Item>
                        <Picker.Item label="Michoacan, México" value="Michoacan, México"></Picker.Item>
                        <Picker.Item label="Burlington, Canada" value="Burlington, Canada"></Picker.Item> 
                        <Picker.Item label="Cataluña, España" value="Cataluña, España"></Picker.Item> 
                        <Picker.Item label="Colima, Colima" value="Colima, Colima"></Picker.Item>
                    </Picker>
                </View>
            </View>

            <Button style={(selectedValue != "" ? (styles.button) : (styles.buttonDisabled))} onPress={() => nextStep(selectedValue, "Pasajeros")}>
                <Text style={styles.centerText}> Next </Text>
            </Button>

        </View> 
    )
}