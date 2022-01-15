
import React, { useState } from 'react'
import { Text, View, TouchableOpacity as Button, ToastAndroid} from 'react-native'
import {NewFlightCard} from './NewFlightCard';
import { Picker } from '@react-native-picker/picker'
import { styles } from './formStyles'
import FlightData from './Origen' //the object where the flight data is stored, it was declared in the origin component. 

export const Destino = ({navigation}) =>{

    const [selectedValue, setSelectedValue] = useState("")
    
    const setObjectValue = (value) =>{
        setSelectedValue(value)
        FlightData.Destiny[0] = value
        FlightData.Destiny[1] = value
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

    //Next screen Fecha

    return (
        <View style={styles.screen}>
            {/**Origen */}
            <NewFlightCard props={FlightData}></NewFlightCard>
            <View style={styles.centerMainContent}>
                <Text style={styles.header}>Where will you be{'\n'}flying to?</Text>
                <View style={(selectedValue != "" ? (styles.input) : (styles.inputDisabled))}>
                    <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        {/**The last ono will be the default value */}
                        <Picker.Item label="Select Location" value=""></Picker.Item> 
                        <Picker.Item label="Berlin, Germany" value="Berlin, Germany"></Picker.Item>
                        <Picker.Item label="México, Michoacan" value="México, Michoacan"></Picker.Item>
                        <Picker.Item label="Canada, Burlington" value="Canada, Burlington"></Picker.Item> 
                        <Picker.Item label="Belgrade, Serbia" value="Belgrade, Serbia"></Picker.Item>
                    </Picker>
                </View>
            </View>

            <Button style={(selectedValue != "" ? (styles.button) : (styles.buttonDisabled))} onPress={() => nextStep(selectedValue, "Pasajeros")}>
                <Text style={styles.centerText}> Next </Text>
            </Button>

        </View> 
    )
}