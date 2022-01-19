import React, { useState, useEffect } from 'react';
import {FlList, SpinnerContainer} from '../../Assets/cardStyled'
import { CardFlight } from './index'
import { getFlights } from '../../Assets/hooks/firebase/loadData';
import { getFlightsList } from '../../Assets/hooks/firebase/infoVuelos';
import { ActivityIndicator } from 'react-native';

export const MyFlights_List = (props) => {
  const [dataFlights, setDataFly] = useState([])
  const [loading, setLoading] = useState(true)

  console.log(props.infoUser)
  const { infoUser } = props



  async function loadData(){
    try{
      const response = await getFlights(infoUser)
      const info = await getFlightsList(response)
      setDataFly(info)      
      setLoading(false) 
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
      (loading) ? (
        <SpinnerContainer>
          <ActivityIndicator 
              size="large" color="#5C6EF8"
          />
        </SpinnerContainer> 
      ) : (
        <FlList
        data={dataFlights}
        renderItem={renderPlace}
        keyExtractor={item => item.key}
        horizontal={false}
        />
      ) 
    )
};
