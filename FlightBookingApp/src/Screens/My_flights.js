import React, {useState} from 'react';
import {Container, Texto, Plus} from '../Assets/styled';
import {CardFlight} from '../Components/CardFlight'
import {Cont} from '../Assets/cardStyled';

export const MyFlights = ({navigation}) => {
  return (
    <Container>
      <CardFlight/>

      <Plus>
        <Texto size = {'60px'} color = {'white'} align={'center'} MP={'-4% 0% 0% 0%'}>
          +
        </Texto>
      </Plus>

    </Container>
  );
};

