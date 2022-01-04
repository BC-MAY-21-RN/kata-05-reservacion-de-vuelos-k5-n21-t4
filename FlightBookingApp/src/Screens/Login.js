import React, { useEffect, useState} from 'react';
import {PswrdInput, Input} from '../Components/InputLog';
import {Container, Texto, TochOP} from '../Assets/styled';
import auth from '@react-native-firebase/auth'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [focus, setFocusState] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '43375129789-o4hq99pg74v43qg22hsmql93uqtk2vm6.apps.googleusercontent.com',
    });
  }, [])

  const login = async () =>{
    try{
      await auth().signInWithEmailAndPassword(email, pswrd)
      .then((res)=>{
        console.log(res)
        console.log('Welcome'+res.user)
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
          Sign Up
        </Texto>
      </TochOP>

      <Texto color={'#747474'} align={'center'}>
        or
      </Texto>

      <TochOP>
        <Texto size={'18px'} color={'white'} FW={'bold'}>
          Sign Up with Google
        </Texto>
      </TochOP>

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