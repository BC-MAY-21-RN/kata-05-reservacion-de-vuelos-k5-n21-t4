import React from 'react';
import { styles } from './formStyles'


export const NextButton = () => {
    return (
        <Button style={(selectedValue != "" ? (styles.button) : (styles.buttonDisabled))} onPress={() => nextStep(selectedValue, "Destino", navigation, setSelectedValue, 'O')}>
            <Text style={styles.centerText}> Next </Text>
        </Button>  
    );
};
