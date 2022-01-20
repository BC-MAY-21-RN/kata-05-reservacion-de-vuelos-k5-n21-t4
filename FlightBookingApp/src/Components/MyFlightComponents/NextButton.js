import React from 'react';
import { Text, TouchableOpacity as Button } from 'react-native'
import { nextStep  } from '../../Assets/hooks/pikerHelper';
import { styles } from './formStyles'


export const NextButton = (props) => {

    const { value, nextScreen, id } = props
    const { button, buttonDisabled } = styles

    return (
        <Button style={value != "" ? (button) : (buttonDisabled)} onPress={() => nextStep(value, nextScreen, id)}> 
            <Text style={styles.centerText}> Next </Text>
        </Button>  
    );
};
