import React, { useState, useEffect } from 'react';
import { Texto, Plus, } from '../Assets/styled';
import {ScrlView, Container2} from '../Assets/cardStyled'
import {  CardFlight } from '../Components/CardFlight'
import db from '../firebase/config';

export const MyFlights = ({ navigation }) => {

  //not working currenyly also we have to filter these flights by user 
  // const [flights, setFlights] = useState([])

  // useEffect(() => {
  //   console.log("Flights")
  //   console.log(fetchFlights())
  // }, [])

  // const fetchFlights = async() => {
  //   const response = db.collection('Flights')
  //   const data = await response.get()
  //   data.docs.forEach(item => {
  //     setFlights([...flights, item.data()])
  //   })
  // }

  return (

    <Container2>
      <ScrlView>
        {/* {
        //might throw the unique key error or not even work haha
        flights && flights.map(flight => {
          return(
            <CardFlight 
              orAirport={flight.Origin[1]} 
              destAirport={flight.Destination[1]} 
              ctryOrigin={flight.Origin[0]} 
              ctryDestination={flight.Destination[0]}
              flightDate={flight.Date.toDate()}
              flightPassengers={flight.Passengers}
            />
          )
        })
      } */}
        <CardFlight
          orAirport={"BEG"}
          destAirport={"AMS"}
          ctryOrigin={"Serbia"}
          ctryDestination={"Netherlands"}
          flightDate={"September 3, 2020"}
          flightPassengers={2}
        />

        <CardFlight
          orAirport={"BEG"}
          destAirport={"AMS"}
          ctryOrigin={"Serbia"}
          ctryDestination={"Netherlands"}
          flightDate={"September 3, 2020"}
          flightPassengers={2}
        />

        <CardFlight
          orAirport={"BEG"}
          destAirport={"AMS"}
          ctryOrigin={"Serbia"}
          ctryDestination={"Netherlands"}
          flightDate={"September 3, 2020"}
          flightPassengers={2}
        />

        <CardFlight
          orAirport={"BEG"}
          destAirport={"AMS"}
          ctryOrigin={"Serbia"}
          ctryDestination={"Netherlands"}
          flightDate={"September 3, 2020"}
          flightPassengers={2}
        />

        <CardFlight
          orAirport={"BEG"}
          destAirport={"AMS"}
          ctryOrigin={"Serbia"}
          ctryDestination={"Netherlands"}
          flightDate={"September 3, 2020"}
          flightPassengers={2}
        />
        <CardFlight
          orAirport={"BEG"}
          destAirport={"AMS"}
          ctryOrigin={"Serbia"}
          ctryDestination={"Netherlands"}
          flightDate={"September 3, 2020"}
          flightPassengers={2}
        />

      </ScrlView>
      <Plus>
          <Texto 
            size={'60px'} 
            color={'white'} 
            align={'center'} 
            MP={'-4% 0% 0% 0%'} 
            onPress={() => navigation.navigate('Add Flight')}>
            +
          </Texto>
        </Plus>

    </Container2>
  );
};

