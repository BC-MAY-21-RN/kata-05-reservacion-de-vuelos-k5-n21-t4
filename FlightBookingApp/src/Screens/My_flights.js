import React, { useState, useEffect } from 'react';
import { Texto, Plus, } from '../Assets/styled';
import {ScrlView, Container2} from '../Assets/cardStyled'
import {  CardFlight } from '../Components/CardFlight'

export const MyFlights = ({ navigation }) => {
  return (
    <Container2>
        <MyFlights_List/>
        <PlussButton onPress={() => navigation.navigate('Origen')}/>
    </Container2>
  );
};