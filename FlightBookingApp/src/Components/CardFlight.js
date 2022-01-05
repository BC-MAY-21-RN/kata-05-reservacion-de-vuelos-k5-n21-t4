import React from 'react';
import {Text} from 'react-native';

import {Container, Cont, Linea, Pais, Ciudad, MoreInfo} from '../Assets/cardStyled';
import Icon from 'react-native-vector-icons/FontAwesome';


export function CardFlight(props) {

  const {orAirport, destAirport, ctryOrigin, ctryDestination, flightDate, flightpassengers} = props;

  return (
    <Container>
        <Cont>
          <Pais>{orAirport}</Pais>
          <Text>avion</Text>
          <Pais>{destAirport}</Pais>
        </Cont>
        <Cont >
          <Ciudad>{ctryOrigin}</Ciudad>
          <Ciudad>{ctryDestination}</Ciudad>
        </Cont>
        <Linea BackColor={'#b6b7ba'}></Linea>
        <Cont >
          <MoreInfo>{flightDate}</MoreInfo>
          <MoreInfo>{flightpassengers} passengers</MoreInfo>
        </Cont>
        <Linea BackColor={'black'} height={'3px'}></Linea>
    </Container>
  );
}