import React from 'react';
import { TouchableOpacity } from 'react-native'
import {Container2} from '../Assets/cardStyled'
import { PlussButton, MyFlights_List } from '../Components/CardFlight/index';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

export const MyFlights = (props) => {
  const { navigation } = props
  const { route: { params: infoUser } } = props

  navigation.addListener('state', (state)=>{
    console.log(state)
    if(state.data.state.index==1)
    {
      console.log("user logged out.")
      GoogleSignin.signOut()
      auth().signOut()
    }
  })

  return (
    <Container2>
        <MyFlights_List infoUser={infoUser}/>
        <TouchableOpacity onPress={() => navigation.navigate('Origen')}>
          <PlussButton/>
        </TouchableOpacity>
    </Container2>
  );
};