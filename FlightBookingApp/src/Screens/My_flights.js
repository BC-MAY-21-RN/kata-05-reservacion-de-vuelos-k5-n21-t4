import React, { useState, useEffect } from 'react';
import { Texto, Plus, } from '../Assets/styled';
import {FlList, Container2} from '../Assets/cardStyled'
import {  CardFlight } from '../Components/CardFlight'
import {flight} from '../Assets/exampleInfo.json';
import db from '../firebase/config';

export const MyFlights = ({ navigation }) => {

  const renderPlace = ({item})=>{
    return(
      <CardFlight
        props = {item}
      />
    )
  }

  return (
    <Container2>
      <FlList
        data={flight}
        renderItem={renderPlace}
        keyExtractor={item => item.id}
        horizontal={false}
      />
      <Plus>
          <Texto 
            size={'60px'} 
            color={'white'} 
            align={'center'} 
            MP={'-4% 0% 0% 0%'} 
            onPress={() => navigation.navigate('Add Flight')}>
            +
          </Texto>
        </Plus>

    </Container2>
  );
};

/**
 * <ScrlView>
        <CardFlight
          orAirport={"BEG"}
          destAirport={"AMS"}
          ctryOrigin={"Serbia"}
          ctryDestination={"Netherlands"}
          flightDate={"September 3, 2020"}
          flightPassengers={2}
        />
      </ScrlView>
 */