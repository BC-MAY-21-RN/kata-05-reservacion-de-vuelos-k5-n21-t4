import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Container2} from '../Assets/cardStyled'
import { PlussButton, MyFlights_List } from '../Components/CardFlight/index';
//import db from '../firebase/config';

export const MyFlights = (props) => {
  
  const { navigation } = props 
  const { route: { params: infoUser } } = props

  return (
    <Container2>
        <MyFlights_List infoUser={infoUser}/>
        <TouchableOpacity onPress={() => navigation.navigate('Origen')}>
          <PlussButton/>
        </TouchableOpacity>
    </Container2>
  );
};