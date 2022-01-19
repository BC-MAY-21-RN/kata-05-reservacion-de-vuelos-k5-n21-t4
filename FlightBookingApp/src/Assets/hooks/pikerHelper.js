//formHelper*
import { ToastAndroid} from 'react-native'

export const FlightData = {
    "userId": "",
    "Destiny": ["", ""],
    "Fecha": "", 
    "Origin": ["", ""], 
    "Passengers": "", 
    "key": 0,
}

export const setObjectValue = (value, setSelectedValue, ID) =>{
    //get only the country
    let Country = value.split(',')
    Country.shift()
    Country = Country.join(',')

    setSelectedValue(value)
    switch (ID) {
        case 'O':
            FlightData.Origin[0] = value.slice(0, 3).toUpperCase() //get the first 3 letters of the country
            FlightData.Origin[1] = Country
            
            break;
            case 'D':
                FlightData.Destiny[0] = value.slice(0, 3).toUpperCase() //get the first 3 letters of the country
                FlightData.Destiny[1] = Country
                
            break;
    
        default:
            break;
    }
}

export const goToScreen = (nextScreen, navigation, selectedValue) =>{
    if (selectedValue != "") {
        console.log(nextScreen);
        navigation.navigate(nextScreen);
    }else{
        ToastAndroid.show("Select a valid option",ToastAndroid.LONG)
    }
}  

export const nextStep = (pickerValue, nextScreen, navigation, setSelectedValue, ID) =>{
    setObjectValue(pickerValue, setSelectedValue,ID)
    goToScreen(nextScreen, navigation, pickerValue)
}
