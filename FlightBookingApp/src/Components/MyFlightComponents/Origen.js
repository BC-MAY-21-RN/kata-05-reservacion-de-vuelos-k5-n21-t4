
import React, { useState } from 'react'
import { Text, View, TouchableOpacity as Button, ToastAndroid} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { styles } from './formStyles'
//import { useFormHelpers } from './useFormHelpers'
{/**list picker: https://github.com/react-native-picker/picker */}

const FlightData = {
    "Destiny": ["", ""],
    "Fecha": "", 
    "Origin": ["", ""], //use setState to get this data, then update the object and pass it
    "Passengers": "", 
    "key": 0,
}

export const Origen = ({navigation}) =>{
    
    // const { selectedValue, setSelectedValue } = useFormHelpers -> custom hook that doesnt work

    const [selectedValue, setSelectedValue] = useState("")
    
    const setObjectValue = (value) =>{
        //get only the country
        let Country = value.split(',')
        Country.shift()
        Country = Country.join(',')

        setSelectedValue(value)
        FlightData.Origin[0] = value.slice(0, 3).toUpperCase() //get the first 3 letters of the country
        FlightData.Origin[1] = Country
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

    //Next screen Destino

    return (
        <View style={styles.screen}>
            {/**Origen */}
            <View style={styles.centerMainContent}>
                <Text style={styles.header}>Where are you{'\n'}now?</Text>
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

            <Button style={(selectedValue != "" ? (styles.button) : (styles.buttonDisabled))} onPress={() => nextStep(selectedValue, "Destino")}>
                <Text style={styles.centerText}> Next </Text>
            </Button>

        </View> 
    )
}

export default FlightData