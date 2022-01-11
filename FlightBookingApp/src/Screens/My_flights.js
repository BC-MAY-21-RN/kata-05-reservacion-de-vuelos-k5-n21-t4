import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import {Container2} from '../Assets/cardStyled'
import { PlussButton, MyFlights_List } from '../Components/CardFlight/index';
//import db from '../firebase/config';

const My_flights = () => {
  return (
    <Container2>
        <MyFlights_List/>
        <PlussButton onPress={() => navigation.navigate('Add Flight')}/>
    </Container2>
  );
};
