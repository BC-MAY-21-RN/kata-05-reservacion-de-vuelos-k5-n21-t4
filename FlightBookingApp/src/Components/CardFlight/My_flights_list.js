import React, { useState, useEffect } from 'react';
import {FlList} from '../../Assets/cardStyled'
import { CardFlight } from './index'
import { getFlights } from '../../Assets/hooks/firebase/loadData';
import { getFlightsList } from '../../Assets/hooks/firebase/infoVuelos';

export const MyFlights_List = (props) => {
  const [dataFlights, setDataFly] = useState([])
  console.log(props.infoUser)
  const { infoUser } = props
  async function loadData(){
    try{
      const response = await getFlights(infoUser)
      const info = await getFlightsList(response)
      setDataFly(info)       
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
        data={dataFlights}
        renderItem={renderPlace}
        keyExtractor={item => item.key}
        horizontal={false}
        />
    </>
  );
};
