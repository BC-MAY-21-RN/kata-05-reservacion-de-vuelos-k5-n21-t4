
import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity as Button} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import {NewFlightCard} from './NewFlightCard';
import FlightData from './Origen';

export const Pasajeros = ({navigation}) =>{

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

    //Next screen Confirmation

    return (
        <View style={styles.screen}>
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
            {/**have a boolean to decided the design of the input component in props */}
            <Button style={(selectedValue != "" ? (styles.button) : (styles.buttonDisabled))} onPress={() => nextStep(selectedValue, "Fecha")}>
                <Text style={styles.centerText}> Next </Text>
            </Button>

        </View> 
    )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: 'white',
        height: '100%',
        padding: 20,
        paddingTop: 0,
        flex: 1,
        justifyContent: 'center',
    },
    centerMainContent:{
        marginBottom: 220,
    },
    header:{
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 90,
    },
    button:{
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        bottom: 60,
        padding: 12,
        borderRadius: 15,
        flex: 1,
        width: '100%',
        backgroundColor: '#5C6EF8',
    },
    centerText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
  });

  /**
   * justify-content: center;
  align-items: center;
  border-radius: 18px;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.BackColor || props.bcolor};
  margin: 2% 0% 2% 0%;
  padding: 3px;
  font-weight: bold;
   */