import React, { useState, useEffect } from 'react';
import {FlList} from '../../Assets/cardStyled'
import { CardFlight } from './index'
import {flight} from '../../Assets/exampleInfo.json';
import { getFlights } from '../../Assets/hooks/firebase/loadData';
import { getFlightsList } from '../../Assets/hooks/firebase/infoVuelos';

export const MyFlights_List = () => {
  const [data, setData] = useState()
  
  async function loadData(){
    try{
      const response = await getFlights('Dylanlegendary1@gmail.com')
      const info = await getFlightsList(response)
      console.log(info);       
    } catch(e){
      console.log('Este es un error '+ e)
    }
  }

  useEffect(()=>{
    loadData()
  }, []);

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
