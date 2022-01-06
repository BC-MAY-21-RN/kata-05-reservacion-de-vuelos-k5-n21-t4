import React, { useEffect, useState} from 'react';
import {PswrdInput, Input} from '../Components/InputLog';
import {Container, Texto, TochOP} from '../Assets/styled';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

import { Text } from 'react-native'
import { GoogleSigninButton, GoogleSignin } from '@react-native-google-signin/google-signin';

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [focus, setFocusState] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [infoUser, setInfoUser] = useState({})


  const login = async () =>{
    try{
      await auth().signInWithEmailAndPassword(email, pswrd)
      .then((res)=>{
        firestore()
          .collection('Users')
          .doc(res.user.uid)
          .get()
          .then(res2=>{
            alert("Welcome "+res2._data.name)
            setInfoUser(res2._data)
            navigation.navigate('Flights', infoUser)
          })
      })
      .catch((e)=>{
        console.log(e)
      })
    }
    catch (e){
      console.log(e)
    }
  }

  const signIn = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    await auth().signInWithCredential(googleCredential).then((resp)=>{
      firess(resp)
    })

    const firess = (res) =>{
      try{
        firestore()
        .collection('Users')
        .doc(res.user.uid)
        .get()
        .then(res2=>{
          alert("Welcome "+res2._data.name)
          setInfoUser(res2._data)
          navigation.navigate('Flights', infoUser)
        })
      } catch(e){
        console.log(e)
      }
    }
  };

  return (
    <Container>
      <Texto size={'16px'}>Email *:</Texto>
      <Input placeholder="Email" value={setEmail}/>

      <Texto size={'16px'}>Password *:</Texto>
      <PswrdInput
        keyboardType={null}
        placeholder="Contraseña"
        secureTextEntry={hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        value={setPswrd}
      />

      <TochOP
        onPress={()=>{
          login()
        }}
      >
        <Texto size={'18px'} color={'white'} FW={'bold'}>
          Login
        </Texto>
      </TochOP>

      <Texto color={'#747474'} align={'center'}>
        or
      </Texto>

      <Text>
          <GoogleSigninButton
            style={{ width: 220, height: 55 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />;
        </Text>

      <Texto align={'center'} color={'gray'}>
        Don't have an account?_
        <Texto
          color={'#5974f5'}
          onPress={() => navigation.navigate('SignUp')}
          style={{color: '#5974f5'}}>
        Sign Up
        </Texto>
      </Texto>

        <Texto
          color={'#5974f5'}
          onPress={() => navigation.navigate('My Flights')}
          style={{color: '#5974f5'}}>
          Pantalla mis vuelos 
        </Texto>
        <Texto
          color={'#5974f5'}
          onPress={() => navigation.navigate('Add Flight')}
          style={{color: '#5974f5'}}>
          Pantalla añadir vuelo 
        </Texto>
      
    </Container>
  );
};