import { FlightData } from './FlightData'
//formHelper*

export const setObjectValue = (value, id) =>{

    const getCountryFromValue = (value) => {
        let Country = value.split(',').shift().join(',')
        // Country.shift()
        // Country = Country.join(',')
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