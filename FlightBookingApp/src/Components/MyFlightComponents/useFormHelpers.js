import { useState } from "react"

const FlightData = {
    "Destiny": ["", ""],
    "Fecha": "", 
    "Origin": ["", ""], //use setState to get this data, then update the object and pass it
    "Passengers": "", 
    "key": 0,
}

export const useFormHelpers = () => {

    const [selectedValue, setSelectedValue] = useState("")
    
    const setOrigin = (value) =>{
        setSelectedValue(value)
        FlightData.Origin = value;
    }
    
    const goToScreen = (nextScreen) =>{
        if (selectedValue != "") {
            navigation.navigate(nextScreen)
        }else{
            ToastAndroid.show("Select a valid option",ToastAndroid.LONG)
        }
    }    
    
    const nextStep = (pickerValue, nextScreen) =>{
        setOrigin(pickerValue)
        goToScreen(nextScreen)
        console.log(FlightData)
    }

    const getObject = () => {
        return FlightData
    }

    return {selectedValue, getObject}

}