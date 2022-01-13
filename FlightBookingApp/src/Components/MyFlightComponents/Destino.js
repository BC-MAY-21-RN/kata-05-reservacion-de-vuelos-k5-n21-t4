
import React, { useState } from 'react'
import { Text, View, TouchableOpacity as Button, ToastAndroid} from 'react-native'
import {NewFlightCard} from './NewFlightCard';
import { Picker } from '@react-native-picker/picker'
import { styles } from './formStyles'

export const Destino = ({navigation}) =>{

    const FlightData = {
        "Destiny": ["", ""], //use setState to get this data, then update the object and pass it
        "Fecha": "", 
        "Origin": ["Smh", "something"], 
        "Passengers": "", 
        "key": 0,
    }

    const goToScreen = () =>{
        if (selectedLanguage != "") {
            navigation.navigate('Fecha')
        }else{
            ToastAndroid.show("Select a valid option",ToastAndroid.LONG)
        }
    }     

    const [selectedLanguage, setSelectedLanguage] = useState("")

    return (
        <View style={styles.screen}>
            {/**Origen */}
            <NewFlightCard props={FlightData}></NewFlightCard>
            <View style={styles.centerMainContent}>
                <Text style={styles.header}>Where will you be{'\n'}flying to?</Text>
                <View style={(selectedLanguage != "" ? (styles.input) : (styles.inputDisabled))}>
                    <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
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

            <Button style={(selectedLanguage != "" ? (styles.button) : (styles.buttonDisabled))} onPress={goToScreen}>
                <Text style={styles.centerText}> Next </Text>
            </Button>

        </View> 
    )
}