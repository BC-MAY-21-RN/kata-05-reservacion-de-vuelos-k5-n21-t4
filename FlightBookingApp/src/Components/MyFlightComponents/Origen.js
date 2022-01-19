
import React, { useState } from 'react'
import { Text, View, TouchableOpacity as Button, ToastAndroid } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { styles } from './formStyles'
import { BackButton } from './BackButton'
import { nextStep, FlightData  } from '../../Assets/hooks/pikerHelper';

//import { useFormHelpers } from './useFormHelpers'
{/**list picker: https://github.com/react-native-picker/picker */}

export const Origen = ({navigation}) =>{
    
    // const { selectedValue, setSelectedValue } = useFormHelpers -> custom hook that doesnt work

    const [selectedValue, setSelectedValue] = useState("")
    
    return (
        <View style={styles.screen}>
            {/**Origen */}
            <BackButton backTo={"My Flights"}/>
            <View style={styles.centerMainContent}>
                <Text style={styles.header}>Where are you{'\n'}now?</Text>
                <View style={(selectedValue != "" ? (styles.input) : (styles.inputDisabled))}>
                    <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue)}}
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

            <Button style={(selectedValue != "" ? (styles.button) : (styles.buttonDisabled))} onPress={() => nextStep(selectedValue, "Destino", navigation, setSelectedValue, 'O')}>
                <Text style={styles.centerText}> Next </Text>
            </Button>

        </View> 
    )
}

export default FlightData