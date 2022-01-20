import React from 'react';
import { TouchableOpacity } from 'react-native'
import {Container2} from '../Assets/cardStyled'
import { PlussButton, MyFlights_List } from '../Components/CardFlight/index';
import { MenuBar } from '../Components/MyFlightComponents/MenuBar';

export const MyFlights = (props) => {
  const { navigation } = props
  const { route: { params: infoUser } } = props

  return (
    <Container2>
        <MenuBar navigation={navigation} clearField={"Origin"}  type={'SignOut'} exit={true}/>
        <MyFlights_List infoUser={infoUser}/>
        <TouchableOpacity onPress={() => navigation.navigate('Origen')}>
          <PlussButton/>
        </TouchableOpacity>
    </Container2>
  );
};