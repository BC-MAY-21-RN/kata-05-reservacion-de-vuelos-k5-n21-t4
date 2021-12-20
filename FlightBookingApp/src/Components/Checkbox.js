import React from "react";
import { Text, View, CheckBox } from 'react-native'

export default function MyTextInput(props){

    const { isSelected, execFunction } = props;
    return(
        <View>
            <CheckBox
            value={isSelected}
            onValueChange={execFunction}          
            />
            {/*<Text>{text}</Text>*/}
        </View>
    )
}