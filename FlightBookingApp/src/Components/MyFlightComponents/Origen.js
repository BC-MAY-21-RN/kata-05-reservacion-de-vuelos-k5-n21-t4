
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './formStyles'
import { MenuBar } from './MenuBar'
import { NextButton } from './NextButton'
import { Pick} from './refaPicker';

export const Origen = ({navigation}) =>{
    const [selectedValue, setSelectedValue] = useState("")
    
    return (
        <View style={styles.screen}>
            <MenuBar backTo={"My Flights"} navigation={navigation} clearField={"Origin"} type={'Back'} exit={false}/>
            <View style={styles.centerMainContent}>
                <Text style={styles.header}>Where are you{'\n'}now?</Text>
                <View style={(selectedValue != "" ? (styles.input) : (styles.inputDisabled))}>
                    <Pick selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
                </View>
            </View>

            <NextButton value={selectedValue} nextScreen={'Destino'} id={'Origen'} navigation={navigation}/>
        </View> 
    )
}