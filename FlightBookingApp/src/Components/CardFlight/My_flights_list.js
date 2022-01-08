import React, { useState, useEffect } from 'react';
import {FlList} from '../../Assets/cardStyled'
import {  CardFlight } from './index'
import {flight} from '../../Assets/exampleInfo.json';
//import db from '../firebase/config';

export const MyFlights_List = () => {

  const renderPlace = ({item})=>{
    return(
      <CardFlight
        props = {item}
      />
    )
  }

  return (
    <>
      <FlList
        data={flight}
        renderItem={renderPlace}
        keyExtractor={item => item.id}
        horizontal={false}
        />
    </>
  );
};
