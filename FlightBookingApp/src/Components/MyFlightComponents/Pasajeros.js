
import React, { useState } from 'react'
import { Text, View, TouchableOpacity as Button, ToastAndroid} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import {NewFlightCard} from './NewFlightCard';
import { styles } from './formStyles'
import {  FlightData  } from '../../Assets/hooks/pikerHelper';
import { MenuBar } from './MenuBar';


export const Pasajeros = ({navigation}) =>{

    const [selectedValue, setSelectedValue] = useState("1")
    
    const setObjectValue = (value) =>{
        setSelectedValue(value)
        FlightData.Passengers = value
    }
    
    const goToScreen = (nextScreen, firstOptionDisabled = true) =>{
        //usage example: in this component, the picker has to start with a default value, 
        //in the previous ones it wasnt allowed, the firstOptionDisabled variable is true by default
        if (firstOptionDisabled) {
            if (selectedValue != "")
                navigation.navigate(nextScreen)
            else
                ToastAndroid.show("Select a valid option",ToastAndroid.LONG)
        }else{
            navigation.navigate(nextScreen)
        }
    }    
    
    const nextStep = (pickerValue, nextScreen) =>{
        setObjectValue(pickerValue)
        goToScreen(nextScreen, false)
    } 

    //Next screen Confirmation

    return (
        <View style={styles.screen}>
            <MenuBar backTo={"Fecha"} navigation={navigation} clearField={"Origin"} type={'Back'} exit={false}/>
            <NewFlightCard props={FlightData}></NewFlightCard>
            <View style={styles.centerMainContent}>
                <Text style={styles.header}>How many passengers?</Text>
                <View style={styles.inputPicker}>
                    <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        {/**The last ono will be the default value */}
                        <Picker.Item label="1" value="1"></Picker.Item> 
                        <Picker.Item label="2" value="2"></Picker.Item>
                        <Picker.Item label="3" value="3"></Picker.Item>
                        <Picker.Item label="4" value="4"></Picker.Item> 
                        <Picker.Item label="5" value="5"></Picker.Item>
                    </Picker>
                </View>
            </View>
            {/**have a boolean to decided the design of the input component in props */}
            <Button style={styles.button} onPress={() => nextStep(selectedValue, "Confirmacion")}>
                <Text style={styles.centerText}> Next </Text>
            </Button>

        </View> 
    )
}