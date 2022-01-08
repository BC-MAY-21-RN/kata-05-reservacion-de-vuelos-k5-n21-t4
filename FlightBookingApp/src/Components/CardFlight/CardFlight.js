import React from 'react';
import {Container, Cont, Linea, Pais, Ciudad, MoreInfo, TempIcon} from '../../Assets/cardStyled';

export function CardFlight({props}) {
  const {orAirport, destAirport, ctryOrigin, ctryDestination, flightDate, flightPassengers} = props;

  return (
    <Container>
        <Cont height={'40px'}>
          <Pais>{orAirport}</Pais>
          <TempIcon>✈</TempIcon> 
          <Pais>{destAirport}</Pais>
        </Cont>
        <Cont height={'20px'}>
          <Ciudad>{ctryOrigin}</Ciudad>
          <Ciudad>{ctryDestination}</Ciudad>
        </Cont>
        <Linea BackColor={'#b6b7ba'}></Linea>
        <Cont height={'35px'} marginT={'10px'}>
          <MoreInfo>{flightDate}</MoreInfo>
          <MoreInfo>{flightPassengers} passengers</MoreInfo>
        </Cont>
        <Linea BackColor={'black'} height={'1.3px'}></Linea>
    </Container>
  );
}