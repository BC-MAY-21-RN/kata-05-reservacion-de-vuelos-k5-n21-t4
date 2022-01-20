
import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity as Button, ToastAndroid} from 'react-native'
import { FlightCard } from '../FlightCard';
import { Picker } from '@react-native-picker/picker'
import { styles } from './formStyles'
import { nextStep, FlightData  } from '../../Assets/hooks/pikerHelper';
import { MenuBar } from './MenuBar';
import { Pick} from './refaPicker';

export const Destino = ({navigation}) =>{

    const [selectedValue, setSelectedValue] = useState("")

    //whenever the user wants to go back to make a change the component has to be rerendeered t
    //hats why i have this function here, so each time the screen is in view the flightcard will re-render
    const renderFlightCard = () =>{
        return(<FlightCard props={FlightData}></FlightCard>)
    }
    
   
    //Next screen Fecha

    return (
        <View style={styles.screen}>
            <MenuBar backTo={"Origen"} navigation={navigation} clearField={"Origin"} type={'Back'} exit={false}/>
            {renderFlightCard()}
            <View style={styles.centerMainContent}>
                <Text style={styles.header}>Where will you be{'\n'}flying to?</Text>
                <View style={(selectedValue != "" ? (styles.input) : (styles.inputDisabled))}>
                
                <Pick selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
                
                </View>
            </View>

            {/* <Button style={(selectedValue != "" ? (styles.button) : (styles.buttonDisabled))} onPress={() => nextStep(selectedValue, "Fecha", navigation, setSelectedValue, 'D')}>
                <Text style={styles.centerText}> Next </Text>
            </Button> */}
            <NextButton />
        </View> 
    )
}