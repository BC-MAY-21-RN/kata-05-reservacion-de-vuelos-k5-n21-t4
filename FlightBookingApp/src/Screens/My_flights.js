import React from 'react';
import {ScrlView, Container2} from '../Assets/cardStyled'
import { MyFlights_List, PlusButton } from '../Components/CardFlight';

const My_flights = () => {
  return (
      <Container2>
        {/* <MyFlights_List/> */}
        <PlusButton onPress={() => navigation.navigate('Origen')}/>
      </Container2>
  )
}

export default My_flights
