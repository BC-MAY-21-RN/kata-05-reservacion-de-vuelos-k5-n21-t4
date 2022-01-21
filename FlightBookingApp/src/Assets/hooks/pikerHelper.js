import { FlightData } from './FlightData'

export const setObjectValue = (value, id) =>{
    
    const getCountryFromValue = (value) => {
        let Country = value.split(',')
        Country.shift()
        Country = Country.join(',')
        return Country;
    }

    switch (id) {
        case 'Origen':
            FlightData.Origin[0] = value.slice(0, 3).toUpperCase(); //get the first 3 letters of the country
            FlightData.Origin[1] = getCountryFromValue(value); 
            break;
            
        case 'Destino':
            FlightData.Destiny[0] = value.slice(0, 3).toUpperCase(); //get the first 3 letters of the country
            FlightData.Destiny[1] = getCountryFromValue(value)
            break;

        case 'Fecha':
            FlightData.Fecha = value;     
            break;
            
        case 'Pasajeros':
            FlightData.Passengers = value;    
            break;
    
        default:
            break;
    } 
    
}

export const clearFlightCardData = () =>{
    FlightData.Destiny = ["", ""]
    FlightData.Fecha = ""
    FlightData.Origin= ["", ""]
    FlightData.Passengers = ""
}