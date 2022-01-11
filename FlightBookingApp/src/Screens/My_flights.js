import React from 'react'
import {Container2} from '../Assets/cardStyled'
import { PlussButton, MyFlights_List } from '../Components/CardFlight/index';

export const MyFlights = ({ navigation }) => {
  return (
    <Container2>
        <MyFlights_List/>
        <PlussButton onPress={() => navigation.navigate('Origen')}/>
    </Container2>
  );
};