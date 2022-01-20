import react from 'react';
import { Picker } from '@react-native-picker/picker'

export const pick = () => {
    return (
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
    ); 
};