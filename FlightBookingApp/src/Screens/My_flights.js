import React, {useState} from 'react';
import {Container, Texto, Plus} from '../Assets/styled';

export const MyFlights = ({navigation}) => {
  return (
    <Container>
      <Texto size={'16px'}>Hola mundo</Texto>
     

      <Plus>
        <Texto size = {'60px'} color = {'white'} align={'center'} MP={'-4% 0% 0% 0%'}>
          +
        </Texto>
      </Plus>

    </Container>
  );
};

