import React, {useState} from 'react';
import {Container, Cont} from '../Assets/cardStyled';


export function CardFlight() {
  return (
    <Container>
        <Cont BackColor={'red'}></Cont>
        <Cont BackColor={'yellow'}></Cont>
        <Cont BackColor={'green'}></Cont>
    </Container>
  );
}