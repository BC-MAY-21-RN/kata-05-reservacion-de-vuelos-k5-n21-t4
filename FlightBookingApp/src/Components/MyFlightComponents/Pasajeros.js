
import React, { useState } from 'react'
import { Text, View, TouchableOpacity as Button, ToastAndroid} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { FlightCard } from '../FlightCard';
import { styles } from './formStyles'
import { MenuBar } from './MenuBar';
import {  FlightData, nextStep  } from '../../Assets/hooks/pikerHelper';


export const Pasajeros = ({navigation}) =>{

    const [selectedValue, setSelectedValue] = useState("1")

    //Next screen Confirmation
    return (
        <View style={styles.screen}>
            <MenuBar backTo={"Fecha"} navigation={navigation} clearField={"Origin"} type={'Back'} exit={false}/>
            <FlightCard props={FlightData}></FlightCard>
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
            {/* <Button style={styles.button} onPress={() => nextStep(selectedValue, "Confirmacion", navigation, setSelectedValue, 'P')}>
                <Text style={styles.centerText}> Next </Text>
            </Button> */}
            <NextButton />
        </View> 
    )
}