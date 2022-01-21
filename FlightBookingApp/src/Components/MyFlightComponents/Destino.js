
import React, { useState, useEffect } from 'react'
import { Text, View} from 'react-native'
import { FlightCard } from '../FlightCard';
import { styles } from './formStyles'
import { FlightData } from '../../Assets/hooks/FlightData'
import { MenuBar } from './MenuBar';
import { Pick} from './refaPicker';
import { NextButton } from './NextButton'

export const Destino = ({navigation}) =>{
    const [selectedValue, setSelectedValue] = useState("")

    const renderFlightCard = () =>{
        console.log(FlightData + " destino")
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

            <NextButton value={selectedValue} nextScreen={'Fecha'} id={'Destino'} navigation={navigation}/>
        </View> 
    )
}