import { FlightData } from './FlightData'
import { ToastAndroid } from 'react-native'
//formHelper*

export const setObjectValue = (value, id) =>{

    const getCountryFromValue = (value) => {
        let Country = value.split(',')
        Country.shift()
        Country = Country.join(',')
        return Country
    }

    switch (id) {
        case 'Origin':
            FlightData.Origin[0] = value.slice(0, 3).toUpperCase(); //get the first 3 letters of the country
            FlightData.Origin[1] = getCountryFromValue(value);
            console.log(FlightData.Origin);
            break;
            
        case 'Destination':
            FlightData.Destiny[0] = value.slice(0, 3).toUpperCase(); //get the first 3 letters of the country
            FlightData.Destiny[1] = getCountryFromValue(value)
            break;

        case 'Date':
            console.log('Esta es la ' + value)
            FlightData.Fecha = value;     
            break;
            
        case 'Passengers':
            console.log('Esta es la ' + value)
            FlightData.Passengers = value;    
            break;
    
        default:
            break;
    }    
}

export const nextStep = (value, id) =>{
    setObjectValue(value, id)
}


/** Go to screens pasenngers
 * const goToScreen = (nextScreen, firstOptionDisabled = true) =>{
        //usage example: in this component, the picker has to start with a default value, 
        //in the previous ones it wasnt allowed, the firstOptionDisabled variable is true by default
        if (firstOptionDisabled) {
            if (selectedValue != "")
                navigation.navigate(nextScreen)
            else
                ToastAndroid.show("Select a valid option",ToastAndroid.LONG)
        }else{
            navigation.navigate(nextScreen)
        }
    }   
 */