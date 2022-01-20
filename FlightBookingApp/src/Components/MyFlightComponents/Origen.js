
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { styles } from './formStyles'
import { MenuBar } from './MenuBar'
import { NextButton } from './NextButton'
import { Pick } from './refaPicker'
{/**list picker: https://github.com/react-native-picker/picker */}

export const Origen = ({navigation}) =>{
    const [selectedValue, setSelectedValue] = useState("")

    const goToScreen = (selectedValue, nextScreen) =>{
        if (value == "") {
    
            navigation.navigate(nextScreen);
            //is there a way to import the navigation?
            ToastAndroid.show("This should trigger the navigation to " + nextScreen,ToastAndroid.LONG)
        }else{
            ToastAndroid.show("Select a valid option",ToastAndroid.LONG)
        }
    }  
    
    return (
        <View style={styles.screen}>
            {/**Origen */}
            <MenuBar backTo={"My Flights"} navigation={navigation} clearField={"Origin"} type={'Back'} exit={false}/>
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

            <NextButton value={selectedValue} nextScreen={'Destino'} id={'Origin'}/>
        </View> 
    )
}