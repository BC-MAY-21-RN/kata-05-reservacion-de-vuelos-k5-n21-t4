import React, { useEffect, useState} from 'react';
import {PswrdInput, Input} from '../Components/InputLog';
import {Container, Texto, TochOP} from '../Assets/styled';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

import { Text } from 'react-native'
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [focus, setFocusState] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

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
          auth().onAuthStateChanged((user)=>{
            if(user){
              navigation.navigate('Flights')
            }
            else{
              console.log("signed out")
            }
          });
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
          style={{ width: 220, height: 50 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
        />;
      </Text>

      <Texto align={'center'} color={'gray'}>
        You do not have an account?
        <Texto
          color={'#5974f5'}
          onPress={() => navigation.navigate('SignUp')}
          style={{color: '#5974f5'}}>
          Sign Up
        </Texto>
      </Texto>
    </Container>
  );
};