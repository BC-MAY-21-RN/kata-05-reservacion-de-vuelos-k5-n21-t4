import React, {useState} from 'react';
import {Container, Texto, Plus} from '../Assets/styled';
import {CardFlight} from '../Components/CardFlight'
import {Cont} from '../Assets/cardStyled';

export const MyFlights = ({navigation}) => {
  return (
    <Container>
      {/* replace with firebase data */}
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
      {/* replace with firebase data */}
      <Plus>
        <Texto size = {'60px'} color = {'white'} align={'center'} MP={'-4% 0% 0% 0%'}>
          +
        </Texto>
      </Plus>

    </Container>
  );
};

