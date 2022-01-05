import React from 'react';
import {Text} from 'react-native';

import {Container, Cont, Linea} from '../Assets/cardStyled';


export function CardFlight(props) {

  const {orAirport, destAirport, ctryOrigin, ctryDestination, flightDate, flightpassengers} = props;

  console.log(orAirport)
  console.log(destAirport)

  return (
    <Container>
        <Cont>
          <Text>{orAirport}</Text>
          <Text>avion</Text>
          <Text>{destAirport}</Text>
        </Cont>
        <Cont >
          <Text>{ctryOrigin}</Text>
          <Text>{ctryDestination}</Text>
        </Cont>
        <Linea BackColor={'#b6b7ba'}></Linea>
        <Cont >
          <Text>{flightDate}</Text>
          <Text>{flightpassengers} passengers</Text>
        </Cont>
        <Linea BackColor={'black'} height={'3px'}></Linea>
    </Container>
  );
}