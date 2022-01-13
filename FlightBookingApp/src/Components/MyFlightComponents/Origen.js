
import React, { useState } from 'react'
import { Text, View, TouchableOpacity as Button, ToastAndroid} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { styles } from './formStyles'
{/**list picker: https://github.com/react-native-picker/picker */}

export const Origen = ({navigation}) =>{

    const FlightData = {
        "Destiny": ["", ""],
        "Fecha": "", 
        "Origin": ["", ""], //use setState to get this data, then update the object and pass it
        "Passengers": "", 
        "key": 0,
    }

    const [selectedLanguage, setSelectedLanguage] = useState("")

    const goToScreen = () =>{
        if (selectedLanguage != "") {
            navigation.navigate('Destino')
        }else{
            ToastAndroid.show("Select a valid option",ToastAndroid.LONG)
        }
    }    

    return (
        <View style={styles.screen}>
            {/**Origen */}
            <View style={styles.centerMainContent}>
                <Text style={styles.header}>Where are you{'\n'}now?</Text>
                <View style={(selectedLanguage != "" ? (styles.input) : (styles.inputDisabled))}>
                    <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
                    >
                        {/**The last ono will be the default value */}
                        <Picker.Item label="Select Location" value=""></Picker.Item> 
                        <Picker.Item label="Belgrade, Serbia" value="Belgrade, Serbia"></Picker.Item>
                        <Picker.Item label="Berlin, Germany" value="Berlin, Germany"></Picker.Item>
                        <Picker.Item label="México, Michoacan" value="México, Michoacan"></Picker.Item>
                        <Picker.Item label="Canada, Burlington" value="Canada, Burlington"></Picker.Item> 
                    </Picker>
                </View>
            </View>

            <Button style={(selectedLanguage != "" ? (styles.button) : (styles.buttonDisabled))} onPress={goToScreen}>
                <Text style={styles.centerText}> Next </Text>
            </Button>

        </View> 
    )
}