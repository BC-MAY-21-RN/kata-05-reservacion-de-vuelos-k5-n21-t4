import React from 'react';
import {Container, Cont, Linea, Pais, Ciudad, MoreInfo, TempIcon} from '../../Assets/cardStyled';

export function CardFlight({props}) {
 console.log(props)
  return (
    <Container>
        <Cont height={'40px'}>
          <Pais>{props.Origin[0]}</Pais>
          <TempIcon>✈</TempIcon> 
          <Pais>{props.Destiny[0]}</Pais>
        </Cont>
        <Cont height={'20px'}>
          <Ciudad>{props.Origin[1]}</Ciudad>
          <Ciudad>{props.Destiny[1]}</Ciudad>
        </Cont>
        <Linea BackColor={'#b6b7ba'}></Linea>
        <Cont height={'35px'} marginT={'10px'}>
          <MoreInfo>{props.Fecha}</MoreInfo>
          <MoreInfo>{props.Passengers} passengers</MoreInfo>
        </Cont>
        <Linea BackColor={'black'} height={'1.3px'}></Linea>
    </Container>
  );
}