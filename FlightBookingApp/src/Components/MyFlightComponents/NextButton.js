import React from 'react';
import { Text, TouchableOpacity as Button, ToastAndroid } from 'react-native'
import { nextStep, setObjectValue  } from '../../Assets/hooks/pikerHelper';
import { styles } from './formStyles'


export const NextButton = (props) => {

    const { value, nextScreen, id } = props
    const { navigation } = props
    const { button, buttonDisabled } = styles

    const nextStep = (value,nextScreen, id) =>{
        goToScreen(nextScreen)
        setObjectValue(value, id)
    }

    const goToScreen = (selectedValue, nextScreen) =>{
        if (selectedValue != "") {
            ToastAndroid.show("This should trigger the navigation to " + nextScreen,ToastAndroid.LONG)
            navigation.navigate(nextScreen);
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
