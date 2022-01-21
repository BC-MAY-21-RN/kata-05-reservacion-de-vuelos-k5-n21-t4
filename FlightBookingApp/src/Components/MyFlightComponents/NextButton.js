import React from 'react';
import { Text, TouchableOpacity as Button, ToastAndroid } from 'react-native'
import { setObjectValue  } from '../../Assets/hooks/pikerHelper';
import { styles } from './formStyles'


export const NextButton = ({value, nextScreen, id, navigation}) => {
    const { button, buttonDisabled } = styles

    const nextStep = (value, nextScreen, id) =>{
        setObjectValue(value, id)
        goToScreen(value, nextScreen)
    }

    const goToScreen = (selectedValue, nextScreen) =>{
        if (selectedValue != "") {
            navigation.navigate(nextScreen)
        }else{
            ToastAndroid.show("Select a valid option",ToastAndroid.LONG)
        }
    } 

    return (
        <Button style={value != "" ? (button) : (buttonDisabled)} onPress={() => nextStep(value, nextScreen, id)}> 
            <Text style={styles.centerText}> Next </Text>
        </Button>  
    );
};
