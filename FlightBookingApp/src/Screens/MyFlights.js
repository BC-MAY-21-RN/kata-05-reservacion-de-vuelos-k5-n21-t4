import React, { useState, useEffect } from 'react';
import {Container2} from '../Assets/cardStyled'
import { PlussButton, MyFlights_List } from '../Components/CardFlight/index';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

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
